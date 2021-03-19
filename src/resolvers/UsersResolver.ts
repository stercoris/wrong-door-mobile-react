import { gql, useQuery } from "@apollo/client";

const GET_ALL_USERS = gql`
  query {
    Users {
      id
      deviceid
      username
      access_level
      last_online_time
      image
    }
  }
`;

export interface User {
  id: number;
  deviceid: string;
  username: string;
  access_level: number;
  last_online_time: Date;
  image: string;
}

interface UserData {
  Users: User[];
}

export function GetUsers() {
  return useQuery<UserData>(GET_ALL_USERS);
}
