import { User } from "./database.entity";
import { Chat } from "./database.entity";

const entities = [User, Chat];

export {User};
export {Chat};
export default entities;

// these entities are used in the controller under entities
// it lets the program know which tables to use