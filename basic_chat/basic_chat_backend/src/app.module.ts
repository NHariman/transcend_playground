import *  as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';
import { MessageModule } from './message/message.module';
import { UserModule } from './user/user.module';

@Module({
	imports: [
		UserModule,
		MessageModule,
		ConfigModule.forRoot({
		  validationSchema: Joi.object({
			DB_HOST: Joi.string().required(),
			DB_PORT: Joi.number().required(),
			DB_USERNAME: Joi.string().required(),
			DB_PASSWORD: Joi.string().required(),
			DB_NAME: Joi.string().required()
		  })
		}),
		DatabaseModule
	  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
