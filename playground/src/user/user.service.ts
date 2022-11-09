import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/database';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user.dto';

/*
	This is where the code is actually written
	After the controler indicates what function should be used to process the information, the data ends up in one of these ChatService functions. Kind of like class methods in cpp.
*/

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User) private readonly userRepository: Repository<User>,
	  ) {}

	createUser(createUserDto: CreateUserDto) {
		const newUser = this.userRepository.create(createUserDto);
		return this.userRepository.save(newUser);
	  }
		  
	getUsers() {
		return this.userRepository.find();
	  }
	  
	findUsersById(search_id: number) {
		return this.userRepository.find({
			where: [
			{ id: search_id }
		  ]
		});
	  }
}

