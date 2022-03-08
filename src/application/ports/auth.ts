import { User } from "../../domain/user";

export interface AuthContextService {
  isLoggedIn: boolean;
  signUp(user: User): User;
  logIn(user: User, password: string): User;
  logOut(): User;
}
