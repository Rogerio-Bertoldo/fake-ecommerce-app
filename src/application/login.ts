import { storeData } from "../adapters/storage";
import { useUserContext } from "../adapters/store";
import { User } from "../domain/user";

// Note that the port interfaces are in the _application layer_,
// but their implementation is in the _adapter_ layer.
import { UserContextService } from "./ports";

export function useLogin() {
  // The use case function doesn't call third-party services directly,
  // instead, it relies on the interfaces we declared earlier.
  const userContext: UserContextService = useUserContext();
  // const auth: AuthenticationService = useAuth();

  // Ideally, we would pass a command as an argument,
  // which would encapsulate all input data.
  async function logIn(user: User, password: string): Promise<User> {
    return new Promise((resolve, reject) => {
      userContext
        .logIn(user, password)
        .then((user) => storeData(user.email, user))
        .then(() => resolve(user))
        .catch((error) => {
          userContext.setUser(user);
          reject(error);
        });
    });
  }

  return {
    user: userContext.user,
    logIn,
  };
}
