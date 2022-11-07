import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, OneToMany, OneToOne, ManyToOne, JoinTable } from 'typeorm';


@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  user_id: number;

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

  @OneToMany(() => Chat, (chat: Chat) => chat.user)
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
  public user: User; // other side

}