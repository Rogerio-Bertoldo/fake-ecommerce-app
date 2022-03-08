import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { getProduct } from "./src/adapters/api/products";
import { useCartContext, useUserContext } from "./src/adapters/store";
import {
  ContextProvider,
  useStoreContext,
} from "./src/adapters/store/contextProvider";
import { useAddToCart } from "./src/application/addToCart";
import { AddtoCartCmd } from "./src/application/commands/addToCart";
import { Cart } from "./src/domain/cart";
import { Product } from "./src/domain/product";
import { User } from "./src/domain/user";
import CartView from "./src/ui/components/cart";
import { Router } from "./src/ui/router";

const App = () => {
  let user = new User("mor_2314", "rogerio@gmail.com", "John", "Doe");
  let cart = new Cart(user, []);
  let product: Product = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };
  const addToCartCmd = new AddtoCartCmd(product, cart);
  const { addToCart } = useAddToCart();
  const storeContext = useStoreContext();
  const cartContext = useCartContext();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          backgroundColor: "green",
          height: 60,
          width: "80%",
        }}
        onPress={() => {
          console.log("Adicionando...")
          getProduct(Math.round(10*Math.random())).then((p: any) => {
            let product: Product = p;
            console.log("Produto: ", p?.id)
            if(p){
              addToCart(new AddtoCartCmd(product, storeContext.cart ?? cart));
            }
            console.log("Carrinho: ", cartContext.cart);
          });
          // addToCart(addToCartCmd);
          // storeContext.updateCart(cart)
        }}
      >
        <Text>Adicionar ao carrinho</Text>
      </TouchableOpacity>
      <CartView />
      <StatusBar style="auto" />
    </View>
  );
};

export default () => {
  return (
    <ContextProvider>
      {/* <App /> */}
      <Router />
    </ContextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
});
