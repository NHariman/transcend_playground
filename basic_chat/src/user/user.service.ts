import { HttpCode, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create_user.dto";
import { User } from "./user.entity";

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User) private readonly userRepository: Repository<User>,
	){}

	getAllUsers(){
		return this.userRepository.find();
	};

	create(createUserDto: CreateUserDto){
		const newUser = this.userRepository.create(createUserDto);
		return this.userRepository.save(newUser);
	};

	findUser(email: string){
		const found_user = this.userRepository.findOneBy({
			email: email
		});
		if (!found_user) {
			throw new HttpException('User not found', HttpStatus.NOT_FOUND);
		}
		return found_user;
	};

	findUserById(id: number){
		const found_user = this.userRepository.findOneBy({
			id: id
		});
		if (!found_user) {
			throw new HttpException('User not found', HttpStatus.NOT_FOUND);
		}
		return found_user;
	};

	async deletePost(id: number) {
		const deleteResponse = await this.userRepository.delete(id);
		if (!deleteResponse.affected) {
		  throw new HttpException('User not found', HttpStatus.NOT_FOUND);
		}
	  }
}
