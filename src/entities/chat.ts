import User from "./users";

export default interface ChatMessage {
  id: number;

  user: User;

  userId: number;

  message: string;

  time: Date;
}
