import { Controller, Post, Body } from "@nestjs/common";
import { ChatService } from "./chat.service";

@Controller('chat')
export class ChatController {
	constructor(private readonly chatService: ChatService) {}
	@Post()
	addMessage(
		@Body('user') chatUser: string, 
		@Body('message') chatMessage: string) {
		const generatedMessage = this.chatService.insertMessage(chatUser, chatMessage);
		return {user: generatedMessage };
	}
}

// readonly means you will never replace this instance/ChatService with something else