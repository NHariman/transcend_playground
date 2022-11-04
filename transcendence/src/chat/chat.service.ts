import { Injectable } from "@nestjs/common";
import { ChatMessage } from "./chat.model";

@Injectable()
export class ChatService {
	private chat: ChatMessage[] = [];
	insertMessage(user: string, message: string, timeStamp: string) {
		const newMessage = new ChatMessage(user, message, timeStamp);

		this.chat.push(newMessage);
		return message;
	}

	getMessage() {
		return [...this.chat]; // spread operator, pulls out all the elements of chat and puts it in a new array add .map to ensure things cannot be edited at random
	}
}