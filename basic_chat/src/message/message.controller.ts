import { Controller, Post, Get, Body } from "@nestjs/common";
import { CreateMessageDto } from "./dto/create_message.dto";
import { MessageService } from "./message.service";

@Controller('message')
export class MessageController {
	constructor(private readonly messageService: MessageService) {}

	@Get()
	getAllMessages(){
		return this.messageService.getAllMessages();
	}

	@Post('create')
	create(@Body() createMessageDto: CreateMessageDto) {
		return this.messageService.create(createMessageDto);
	}
}
