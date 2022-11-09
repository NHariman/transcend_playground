import { Controller, Post, Get, Body, Param, ParseIntPipe, Delete } from "@nestjs/common";
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

	@Get('id/:id')
	findUsersById(@Param('id', ParseIntPipe) id: number) {
		return this.userService.findUserById(id);
	}
	
	@Delete('id/:id')
	deleteUser(@Param('id', ParseIntPipe) id: number){
		return this.userService.deleteUser(id);
	}

	@Post('create')
	create(@Body() createUserDto: CreateUserDto) {
		return this.userService.create(createUserDto);
	}
}
