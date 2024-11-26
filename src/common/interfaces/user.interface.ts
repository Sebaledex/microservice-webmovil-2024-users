export interface IUser extends Document {
  name: string;
  username: string;
  email: string;
  password: string;
  accessToken: string;
  refreshToken: string;
  area: string;
}
