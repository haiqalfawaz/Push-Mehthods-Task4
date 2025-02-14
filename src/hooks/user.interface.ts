export interface user {
  username: string;
  login: { uuid: string; username: string };
  name: { first: string; last: string };
  email: string;
  gender: string;
  registered: { date: string };
}
