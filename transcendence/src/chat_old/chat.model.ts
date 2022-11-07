export class ChatMessage {
	constructor (
		public user: string,
		public message: string,
		public time: string
		){}
}
// Ts allows you to create a constructor that immediately declares what variables are in there