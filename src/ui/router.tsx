import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./screens/login";
import CartView from "./screens/cart";
// import { useUserContext } from "../adapters/store/contextProvider";
import { User } from "../domain/user";
import Home from "./screens/home";
import HomeHeader from "./screens/home/components/header";

const PreAuthFlow = createNativeStackNavigator();
const PostAuthFlow = createNativeStackNavigator();
const defaultNavigatorOptions: NativeStackNavigationOptions = {
  animation: "slide_from_right",
  headerTitleAlign: "center",
};

const PreAuthStack = () => {
  return (
    <NavigationContainer>
      <PreAuthFlow.Navigator screenOptions={defaultNavigatorOptions}>
        <PreAuthFlow.Screen name="Login" component={Login} />
      </PreAuthFlow.Navigator>
    </NavigationContainer>
  );
};

const PostAuthStack = () => {
  return (
    <NavigationContainer>
      <PostAuthFlow.Navigator screenOptions={defaultNavigatorOptions}>
        <PostAuthFlow.Screen
          name="Home"
          component={Home}
          options={{
            header: ({ navigation }) => (
              <HomeHeader onPress={() => navigation.navigate("Cart")} />
            ),
          }}
        />
        <PostAuthFlow.Screen name="Cart" component={CartView} />
      </PostAuthFlow.Navigator>
    </NavigationContainer>
  );
};

export const Router = () => {
  // const userStore = useUserContext()
  let user = new User("mor_2314", "rogerio@gmail.com", "John", "Doe");
  // React.useEffect(() => {
  //   console.log("START_AQUI...");
  //   userStore.actions
  //     .login(user, "83r5^_")
  //     .then(async (r: any) => {
  //       console.log("AUTH-EMAIL: ", r.email);
  //       return Promise.resolve(r);
  //     })
  //     .catch((error: any) => console.log("ERRO_AUTH: ", error));
  // }, [])

  return <PostAuthStack />;

  // return userStore.data.user ? <PostAuthStack /> : <PreAuthStack />;
};
