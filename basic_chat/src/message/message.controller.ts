import { Controller, Post, Get, Body } from "@nestjs/common";
import { MessageService } from "./message.service";

@Controller('message')
export class MessageController {
	constructor(private readonly messageService: MessageService) {}
}
