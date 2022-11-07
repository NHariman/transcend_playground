import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatController } from "./chat.controller";
import { ChatService } from "./chat.service";
import { Chat } from 'src/database'

@Module({
	imports: [TypeOrmModule.forFeature([Chat]),],	
	controllers: [ChatController],
	providers: [ChatService],
})
export class ChatModule {}
