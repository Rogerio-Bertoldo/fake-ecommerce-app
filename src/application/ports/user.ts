import { User } from "../../domain/user";

export interface UserContextService {
  user?: User | null;
  updateUser(user: User): void;
}
