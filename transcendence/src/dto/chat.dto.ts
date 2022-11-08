import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { User } from "src/database";

// DTOs stand for data transfer objects
/*
  this is what is used to save data into the database
*/


export class StoreMessageDto {
	@IsNotEmpty()
	message_body: string;
	user_id: User;
  }
  