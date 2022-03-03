import { User } from "../domain/user";

export interface UserContextService {
  user?: User;
  setUser(user: User): void,
  signUp(user: User, password: string): Promise<User>;
  logIn(user: User, password: string): Promise<User>;
  logOut(user: User): Promise<void>;
}
