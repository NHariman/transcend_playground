import { Body,
	Controller,
	Get,
	Param,
	ParseIntPipe,
	Post,
	UsePipes,
	ValidationPipe, } from "@nestjs/common";
import { ChatService } from "./chat.service";
import { StoreMessageDto  } from "./dto/chat.dto";

/*
	This is where you find all the available methods for 
	localhost:3000/chat

	when a GET or POST is detected it is directed to the service that handles it.
*/

@Controller('chat')
export class ChatController {
	constructor(private readonly chatService: ChatService) {}

	@Get()
	getMessages() {
		return this.chatService.getMessages();
	}

	@Post('create')
	@UsePipes(ValidationPipe)
	createUsers(@Body() storeMessagedto: StoreMessageDto) {
	  return this.chatService.saveMessage(storeMessagedto);
	}
}
