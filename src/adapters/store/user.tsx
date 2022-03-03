import React from "react";
import { User } from "../../domain/user";
import { AuthApi } from "../api";
import { deleteData, getData, storeData } from "../storage";

export const __useUserData = () => {
  const [user, setUser] = React.useState<User | null>(null);

  const login = async (user: User, password: string) => {
    //Only users available in fakestoreapi will login successfully.
    //See https://fakestoreapi.com/docs#products
    return new Promise((resolve, reject) => {
      AuthApi.login(user, password)
        .then(() => {
          setUser(user);
          resolve(user);
        })
        .catch((error) => {
          setUser(null);
          reject(new Error(error));
        });
    });
  };

  const logout = (user: User) => {
    setUser(null);
  };

  const signUp = async (user: User, password: string) => {
    //This is just a signup mock. It doesn't store any data in a remote service or
    //in app storage
    return new Promise((resolve, reject) => {
      AuthApi.signUp(user, password)
        .then(() => resolve(user))
        .catch(reject);
    });
  };

  const getFromCache = async (email: string) => {
    return new Promise((resolve, reject) => {
      getData(email).then(resolve).catch(reject);
    });
  };

  return {
    user,
    setUser,
    getFromCache,
    login,
    logout,
    signUp
  };
};
