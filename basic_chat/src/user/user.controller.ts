import { Controller, Post, Get, Body } from "@nestjs/common";
import { get } from "http";
import { CreateUserDto } from "./dto/create_user.dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get()
	getAllUsers() {
		return this.userService.getAllUsers();
	}

	@Post('create')
	create(@Body() createUserDto: CreateUserDto) {
		return this.userService.create(createUserDto);
	  }
}
