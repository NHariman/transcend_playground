import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { User } from 'src/database';

/*
	This is the module, it needs to be imported in app.module.ts as that's what gets called in the main.ts
	it basically holds the information of the controller and service.
*/

@Module({
	imports: [TypeOrmModule.forFeature([User]),],
	controllers: [UserController],
	providers: [UserService],
})
export class UserModule {}
