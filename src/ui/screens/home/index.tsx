import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Rating } from "react-native-ratings";

import { getAllProducts, getProduct } from "../../../adapters/api/products";
import { useCartContext, useUserContext } from "../../../adapters/store";
import {
  ContextProvider,
  useStoreContext,
} from "../../../adapters/store/contextProvider";
import { useAddToCart } from "../../../application/addToCart";
import { AddtoCartCmd } from "../../../application/commands/addToCart";
import { Cart } from "../../../domain/cart";
import { Product } from "../../../domain/product";
import { User } from "../../../domain/user";
import CartView from "../../../ui/components/cart";
import Header from "./components/header";
import Board, { ProductListener } from "./components/board";

const Home = ({ navigation }) => {
  let user = new User("mor_2314", "rogerio@gmail.com", "John", "Doe");
  let cart = new Cart(user, []);
  let product: Product = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };
  const addToCartCmd = new AddtoCartCmd(product, cart);
  const { addToCart } = useAddToCart();
  const storeContext = useStoreContext();
  const cartContext = useCartContext();
  const [groupedProducts, setGroupedProducts] = React.useState([]);
  let group: any = [];

  React.useEffect(() => {
    getAllProducts().then((products) => {
      if (Array.isArray(products)) {
        for (let index = 0; index < products.length - 3; index += 3) {
          group.push([
            {
              product: products[index],
            },
            {
              product: products[index + 1],
            },
            {
              product: products[index + 2],
            },
          ]);
        }
      }
      setGroupedProducts(group)
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={groupedProducts}
        renderItem={(productTriplet) => <Board products={productTriplet.item} style={{marginTop: 40}} />}
        keyExtractor={(item) => `${Math.random()}`}
        style={{width: '95%'}}
        contentContainerStyle={{ alignItems: 'center'}}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
