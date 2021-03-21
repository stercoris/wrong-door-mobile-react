import Command from "./commands";

export default interface LogsMessage {
  id: number;

  commandId: number;

  command: Command;

  username: string;

  message: string;

  time: Date;
}
