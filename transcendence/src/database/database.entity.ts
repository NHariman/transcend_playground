import {
			Column,
			Entity, 
			PrimaryGeneratedColumn, 
			JoinColumn, 
			OneToMany, 
			OneToOne, 
			ManyToOne, 
			JoinTable 
		} from 'typeorm';

/*
		This is how we know which tables are in our database
		the @entity() decorator represents one table
		after which you can define the columns. When the code is run, nestJS will automatically create the table on the running database.

		@primarygeneratedcolumn is used for the ID, it's unique.

		in this file we have a USER and a CHAT db, disgregard the idea that we need multiple chats for now, currently it's just focused on the simplest task of having users and messages.
*/

@Entity()
export class User {
  @PrimaryGeneratedColumn({
	type: 'bigint',
	name: 'user_id',
  })
  id: number;

  @Column({
	nullable: false,
	default: '',
	unique: true
  })
  username: string;

  @Column({
	name: 'email_address',
	nullable: false,
	default: '',
	unique: true
  })
  email: string;

  @Column({
	nullable: false,
	default: '',
  })
  password: string;

  @OneToMany(() => Chat, (chat: Chat) => chat.user_id)
  @JoinTable()
  public chats: Chat[]; // one side
}

@Entity()
export class Chat {
  @PrimaryGeneratedColumn({
	type: 'bigint',
	name: 'id',
  })
  msg_id: number;

  @Column({
	name: 'message',
	nullable: false,
	default: '',
  })
  message_body: string;

  @ManyToOne(() => User, (user: User) => user.chats)
  public user_id: User; // other side

}