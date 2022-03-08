import React, { useEffect } from "react";
import { View, Text, ScrollView, Image, FlatList } from "react-native";
import { useCartContext } from "../../../adapters/store";
import { Product } from "../../../domain/product";

const CartView = ({ navigation }) => {
  const cartContext = useCartContext();
  const groupedProducts: Product[] = [];

  cartContext.cart?.products.forEach((product) => {
    const currentProduct: Product | undefined = groupedProducts.find(
      (item) => item.id === product.id
    );
    if (currentProduct) {
      currentProduct.amount = currentProduct.amount
        ? currentProduct.amount + 1
        : 1;
    } else if (product) {
      groupedProducts.push(product);
    }
  });

  return (
    <View style={{ width: "100%", backgroundColor: "orange", flex: 1 }}>
      <FlatList
        data={groupedProducts}
        renderItem={(product) => {
          return (
            <ScrollView
              key={`${product.item.id}${Math.random()}`}
              style={{
                height: 80,
                marginTop: 10,
                backgroundColor: "white",
                borderWidth: 2,
                borderRadius: 10,
                borderColor: "white",
              }}
              contentContainerStyle={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                paddingHorizontal: 5,
              }}
            >
              <Image
                source={{ uri: product.item.image }}
                style={{ width: 80, height: 80, resizeMode: "stretch", marginRight: 10 }}
              />
              <Text numberOfLines={4} style={{ flex: 3 }}>{product.item.title}</Text>
              <Text style={{marginHorizontal: 10}}>{product.item.amount ?? 0}</Text>
            </ScrollView>
          );
        }}
        keyExtractor={(item) => `${Math.random()}${item.id}`}
      />
    </View>
  );
};

export default CartView;
