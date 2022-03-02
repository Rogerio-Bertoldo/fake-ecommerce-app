import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useCartContext } from "./src/adapters/store";
import { StoreProvider } from "./src/adapters/store";

export function App() {
  const cartStore = useCartContext();
  cartStore.actions.getFromCache("sample-user-id").then((res: any) => console.log("CACHE: ", res))
  useEffect(() => {
    console.log("START_AQUI...");
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => {
        cartStore.actions.addToCart("sample-user-id",products[0]);
        cartStore.actions.addToCart("sample-user-id",products[1]);
      })
      .catch((error) => console.log("ERRO aqui: ", error))
      .finally(() => console.log("CART_AQUI: ", cartStore.data.cart));
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
      <App />
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
