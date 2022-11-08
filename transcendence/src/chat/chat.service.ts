import { Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';
import { Chat } from "src/database";
import { User } from "src/database";
import { InjectRepository } from '@nestjs/typeorm';
import { StoreMessageDto } from './dto/chat.dto';

/*
	This is where the code is actually written
	After the controler indicates what function should be used to process the information, the data ends up in one of these ChatService functions. Kind of like class methods in cpp.
*/

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

	getMessagesFromUser(user_search: User) {
		return this.chatRepository.find({
			relations: ['user']
		});
	}
}

