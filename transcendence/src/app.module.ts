import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config'; // finds and parses .env file
import { TypeOrmModule } from '@nestjs/typeorm' // db stuff
import { UserModule } from './user/user.module'; // user module
import entities from './database';
import { ChatModule } from './chat/chat.module';

@Module({
	imports: [ ChatModule,
			UserModule,	
		ConfigModule.forRoot({ isGlobal: true }),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: (configService: ConfigService) => ({
				type: 'postgres',
				host: configService.get('DB_HOST'),
				port: +configService.get<number>('DB_PORT'),
				username: configService.get('DB_USERNAME'),
				password: configService.get('DB_PASSWORD'),
				database: configService.get('DB_NAME'),
				entities: entities,
				synchronize: true,
			}),
			inject: [ConfigService],
		})],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
