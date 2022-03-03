import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./screens/login";
import { useUserContext } from "../adapters/store";
import { User } from "../domain/user";

const PreAuthFlow = createStackNavigator();

const PreAuthStack = () => {
  return (
    <NavigationContainer>
      <PreAuthFlow.Navigator>
        <PreAuthFlow.Screen name="Login" component={Login} />
      </PreAuthFlow.Navigator>
    </NavigationContainer>
  );
};

const PostAuthStack = () => {
  return (
    <NavigationContainer>
      <PreAuthFlow.Navigator>
        <PreAuthFlow.Screen name="Home" component={Login} />
      </PreAuthFlow.Navigator>
    </NavigationContainer>
  );
};

export const Router = () => {
  const userStore = useUserContext()
  let user = new User("mor_2314", "rogerio@gmail.com", "John", "Doe");
  React.useEffect(() => {
    console.log("START_AQUI...");
    userStore.actions
      .login(user, "83r5^_")
      .then(async (r: any) => {
        console.log("AUTH-EMAIL: ", r.email);
        return Promise.resolve(r);
      })
      .catch((error: any) => console.log("ERRO_AUTH: ", error));
  }, [])

  return userStore.data.user ? <PostAuthStack /> : <PreAuthStack />;
};
