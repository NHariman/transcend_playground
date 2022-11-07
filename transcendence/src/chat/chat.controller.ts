import { Body,
	Controller,
	Get,
	Param,
	ParseIntPipe,
	Post,
	UsePipes,
	ValidationPipe, } from "@nestjs/common";
import { ChatService } from "./chat.service";
import { StoreMessageDto  } from "src/dto/chat.dto";

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
