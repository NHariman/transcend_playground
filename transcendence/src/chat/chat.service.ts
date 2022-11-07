import { Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';
import { Chat } from "src/database";
import { InjectRepository } from '@nestjs/typeorm';
import { StoreMessageDto } from 'src/dto/chat.dto';


@Injectable()
export class ChatService {
	constructor(
		@InjectRepository(Chat) private readonly chatRepository:
		Repository<Chat>,
	) {}

	saveMessage(storeMessageDto: StoreMessageDto) {
		const newMessage = this.chatRepository.create(storeMessageDto);
		return this.chatRepository.save(newMessage);
	}

	getMessages() {
		return this.chatRepository.find();
	}

	// getMessagesFromUser(id: number) {
	// 	return this.chatRepository.find({
	// 		where: [
	// 			{ user_id: id }
	// 		]
	// 	});
	// }
}

