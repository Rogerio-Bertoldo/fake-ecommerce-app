import axios from "axios";
import { User } from "../../domain/user";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: { "Content-Type": "application/json" },
});


export const signUp = async (user: User, password: string) => {
  return new Promise((resolve, reject) => {
    api
      .post(`/users`, {
        email: user.email,
        username: user.userName,
        password: password,
        name: {
          firstname: user.name.firstName,
          lastname: user.name.lastName,
        },
        address: { ...user.address },
        phone: user.phone,
      })
      .then((response) => response.data)
      .then(resolve)
      .catch(reject);
  });
};

export const login = async (user: User, password: string) => {
  return new Promise((resolve, reject) => {
    api
      .post('/auth/login', {
        username: user.userName,
        password,
      })
      .then(() => resolve(user))
      .catch(reject);
  });
};
