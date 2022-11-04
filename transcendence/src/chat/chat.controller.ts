import { Controller, Post, Get, Body } from "@nestjs/common";
import { ChatService } from "./chat.service";

@Controller('chat')
export class ChatController {
	constructor(private readonly chatService: ChatService) {}
	@Post()
	addMessage(
		@Body('user') chatUser: string, 
		@Body('message') chatMessage: string) : any
		{
			const timeStamp = new Date().toString();
			const generatedMessage = this.chatService.insertMessage(chatUser, chatMessage, timeStamp);
			return {user: generatedMessage };
		}

	@Get()
	getAllMessages() {
		return this.chatService.getMessage();
	}
}

// readonly means you will never replace this instance/ChatService with something else