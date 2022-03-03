import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ProductApi } from "./src/adapters/api";
import { useCartContext, useUserContext } from "./src/adapters/store";
import { StoreProvider } from "./src/adapters/store";
import { User } from "./src/domain/user";
import { Router } from "./src/ui/router";

export function App() {
  const cartStore = useCartContext();
  const userStore = useUserContext();
  cartStore.actions
    .getFromCache("rogerio@gmail.com")
    .then((res: any) => console.log("CACHE: ", res));
  let user = new User("mor_2314", "rogerio@gmail.com", "John", "Doe");
  useEffect(() => {
    console.log("START_AQUI...");
    userStore.actions
      .login(user, "83r5^_")
      .then(async (r: any) => {
        console.log("AUTH-EMAIL: ", r.email);
        return Promise.resolve(r);
      })
      .catch((error: any) => console.log("ERRO_AUTH: ", error));
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default () => {  
  return (
    <StoreProvider>
      {/* <App /> */}
      <Router />
    </StoreProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
});
