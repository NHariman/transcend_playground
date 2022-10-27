# NestJS notes
Video: [link](https://www.youtube.com/watch?v=F_oOtaxb0L8)
Based on ExpressJS.

install nestjs using: (you may need to sudo, which is probably why we need docker.)
```
npm i -g @nestjs/cli
```

create new project:
```
nest new project-name
```
This creates a folder named `project-name`

Navigating into the folder will show a bunch of things:
- node_modules: holds all dependencies, managed by the `package.json` file.
- src: contains source files that will be used for the project
- test: for end-to-end testing
- nest-cli.json: default leave it as it is but allows you to change src file location.
- nodemon-debug.json: tool for under the hood. Used to launch the node server and automatically reload or relaunch when something changes.
- package.json: contains packages and scripts to use.
- typescript configurations for linting, should not change these unless you know what you're doing.

In the src folder:
## app.controller.spec.ts 
is for unit testing

## app.controller.ts

### @Controller
```ts
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
```
Contains a decorator called `Controller` and a class called `AppController`, which does things.
The `@Get()` also comes from nestjs and is assigned to a method called `getHello()`.
These are used in `app.module.ts` in the `controllers` see: `controllers: [AppController]`.
If you have a controller with no arguments ie. `@Controller()`, it will handle incoming requests to your root route. ie. `your-domain.com`
In order to target specific side roots, you need filters.
ie.
`@Controller('products')` this will then react to the route: `your-domain.com/products`.

### @Get and other methods
The `@Get()` request decorator indicates that the method under it is executed whenever a GET request is made to the server root. If you want to make GET requests work on sub domains you would need to add it to the GET via `@Get('location')`. Keep in mind this method works in nested blocks, so:
```ts
@Controller('products')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  getHello(): string {
    return this.appService.getHello();
  }
}
```
would mean GET only works at `your-domain.com/products/users`

and
```ts
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  getHello(): string {
    return this.appService.getHello();
  }
}
```
would mean GETs are allowed for `your-domain.com/users`

so to summerise:
`@Controller` handles filtering of requests/routing
`@Get` handles incoming request methods, there are also functions for POST, DELETE, etc.

### Constructors in Nestjs
```ts
constructor(private readonly appService: AppService) {}
```
this is a dependency injection in action.
A constructor is added (every class can have it) and given an argument. Assigning in ts is done opposite to what we're used to in c++ or other languages.
NestJs will use this function and pass the `AppService` to the function, this is done through the `providers:` in `@Module`. This tells nestjs where to find it.

see: **app.service.ts** for info on `@Injectable()`.


### declaring variables and functions in ts
```ts
accessibility flags variable_name: variable type
// ie.
private readonly is_int: int
```
For methods it's:
```ts
getMethod(): string {}

// which means
methodName(): return_type {};
```


## app.module.ts: 
```ts
import { Module } from '@nestjs/common'; // like headers
import { AppController } from './app.controller'; // where AppController is found
import { AppService } from './app.service'; // where AppService is found

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```
This file is important, as it embraces modularity. NestJs doesn't by default take all the files you have and looks into them and compiles them together. Instead you should tell nestjs which files and features make up your app. There are a few important functions here:
	- controllers: are the meat of the app, they control how you handle incoming requests. They accept incoming requests, do something with that, and send it back as a response.
	- providers: extra services and classes which you can inject into controllers or other providers to give it additional functionalities.
	- import: allows you to import modules into other modules
Modules are typically split by features in your app. A module is just an empty class `AppModule{}`, the `@Module` makes it a decoration and allows for attaching to other classes.

## app.service.ts
In app.service.ts, it's a class with the `@injectable` decorator which has a method. In services you can refer to databases etc. this is the place for the logic so the controllers can stay lean and focus on putting together requests and response.

```ts
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
```

## main.ts
Entry point of the nestjs application. When app is built it will get compiled to Javascript and bundled into a single/multipls js files. this will then run when the app starts on the server.
	- `const app = await nestfactory.create(AppModule)` can be used to create the nest application.
	- `listen(3000)` will be for listening on the mentioned port, in this case 3000.

## Starting a production
Using the `package.json` you can find different npm commands to use to start the project up using `npm run {alias}`.
You can run:
```
npm run start:dev
```
Headers are set automatically through nestjs. But you can also set them manually by importing `Header`.
ie.
```
@Header('Content-Type', 'text/html')
```
these stack, so you can do:
```ts
@Get()
@Header()
getHello(): {name: string} {
	return (name: 'Max');
}
```

naming convention:
`feature.type_of_file.ts`

# helpful packages:
NestJS has its own exceptions packages for NotFound etc.

NestJS supports throw, like in C++