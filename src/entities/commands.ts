export default interface Command {
  id: number;

  body: string;

  username: string;

  type: number;

  time: Date;

  is_executed: boolean;
}
