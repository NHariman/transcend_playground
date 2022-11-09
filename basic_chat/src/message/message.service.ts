import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "src/user/dto/create_user.dto";
import { Repository } from "typeorm";
import { CreateMessageDto } from "./dto/create_message.dto";
import { Message } from "./message.entity";


@Injectable()
export class MessageService {
	constructor(
		@InjectRepository(Message) private readonly messageRepository: Repository<Message>,
	){}

	getAllMessages() {
		return this.messageRepository.find({ relations: ['user_id']});
	}

	async create(createMessageDto : CreateMessageDto) {
		const newMessage = this.messageRepository.create(createMessageDto);
		return this.messageRepository.save(newMessage);
	}

	async getMessageById(id: number) {
		const message = await this.messageRepository.findOneBy({
			id:id
		});
		if (message) {
		  return message;
		}
		throw new HttpException('Posts not found', HttpStatus.NOT_FOUND);
	}
}

