# Instructions on order of doing things
## Packages to install for backend
```
npm install @nestjs/config
npm install @nestjs/typeorm typeorm mysql2
npm install pg
npm install class-validator
npm install @hapi/joi @types/hapi__joi
```

## Packages to install frontend
```
npm install axios --save
npm install -g @vue/cli
```

## Prerequisites
In order for this project to work, you have to have a postgresdb running, you can do this using brew by saying:
`brew services start postgres`
This will get postgres running on port `5432` (or whatever port you had it set to start on)
You can then use pgadmin or something like it to check the database and query it if you want.

Next follow the steps below to link the nestjs backend with the database you created.

## Linking app with db
1. create an .env file and fill in variables for HOST, PORT, DB_USERNAME, DB_PASSWORD and DB_NAME (you can change the names as you see fit.)
2. in app.module.ts located in the backend folder (basic_chat/basic_chat_backend/src), apply the ConfigModule and Joi module in imports
```ts
import Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
	imports: [
		UserModule,
		ConfigModule.forRoot({
		  validationSchema: Joi.object({
			POSTGRES_HOST: Joi.string().required(),
			POSTGRES_PORT: Joi.number().required(),
			POSTGRES_USER: Joi.string().required(),
			POSTGRES_PASSWORD: Joi.string().required(),
			POSTGRES_DB: Joi.string().required(),
			PORT: Joi.number(),
		  })
		})
	  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

This will ensure that your db (if running) is connected to the backend. If the tables have not been made yet, the code will generate it for you.
To run the backend, run `npm run start:dev`

The backend usually runs on port `3000`

Lastly, there's the frontend, navigate into the frontend folder and run `npm run serve` to start up vue.
Navigating to `http://localhost:8080` or whatever port the frontend decided to run on will give you a simple vue website with a bunch of small functionalities, like creating users and sending chat messages. (no login tho bc idk how to do that yet :'))

Now you should have a running production that you can play around in and edit if desired. 
Please keep in mind it's not very secure, you can very easily crash this server as I did not incorporate any validations yet, it's just basic playing in a fullstack dev environment at this point.

Please consult the various files in the frontend and backend folders for more info.

tip: if you start in main.ts of the frontend or backend you should be able to navigate through the folders more easily