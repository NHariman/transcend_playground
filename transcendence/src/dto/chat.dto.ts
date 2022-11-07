import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

// how do you make create message
// function that also stores userid?
export class StoreMessageDto {
	@IsNotEmpty()
	message_body: string;

	user: number;
  }
  