import { Injectable } from "@nestjs/common";
import { ChatMessage } from "./chat.model";

@Injectable()
export class ChatService {
	chat: ChatMessage[] = [];
	insertMessage(user: string, message: string) {
		const timeStamp = new Date().toString();
		const newMessage = new ChatMessage(user, message, timeStamp);

		this.chat.push(newMessage);
		return message;
	}
}