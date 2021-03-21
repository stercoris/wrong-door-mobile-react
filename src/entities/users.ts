import AccessLevel from "./access_level";

export default interface User {
  id: number;

  deviceid: string;

  username: string;

  access_level: number;

  last_online_time: Date;

  image: string;
}
