import { Body,
	Controller,
	Get,
	Param,
	ParseIntPipe,
	Post,
	UsePipes,
	ValidationPipe, } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from 'src/dto/user.dto';

/*
	This is where you find all the available methods for 
	localhost:3000/user

	when a GET or POST is detected it is directed to the service that handles it.
*/

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get()
  	getUsers() {
    return this.userService.getUsers();
  }
  
  @Get('id/:id')
  findUsersById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findUsersById(id);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createUsers(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

}
