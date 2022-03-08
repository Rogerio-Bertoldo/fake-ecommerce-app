import {
  AuthContextService,
  CartContextService,
  UserContextService,
} from "../../application/ports";

import { useStoreContext } from "./contextProvider";

export function useAuthContext(): AuthContextService {
  return useStoreContext();
}

export function useUserContext(): UserContextService {
  return useStoreContext();
}

export function useCartContext(): CartContextService {
  return useStoreContext();
}
