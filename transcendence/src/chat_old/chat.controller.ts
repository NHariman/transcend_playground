import { Controller, Post, Get, Body } from "@nestjs/common";
import { ChatService } from "./chat.service";

/*
	This is a databaseless test i was using, where the data is stored on a local array (meaning every time i changed code the db would be cleared out)
	it's a simple example of using controller, module, service and model for it, but is similar in structure as chat and user.
*/

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