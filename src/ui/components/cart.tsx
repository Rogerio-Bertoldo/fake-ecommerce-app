import React, { useEffect } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { useCartContext } from "../../adapters/store";
import { Product } from "../../domain/product";

const CartView = () => {
  const cartContext = useCartContext();
  const [products, setProducts] = React.useState<Product[]>([])

  console.log("CART LENGTH: ", cartContext.cart?.products.length)
  useEffect(() => {
      const cartProducts = cartContext.cart?.products ?? []
      setProducts([...cartProducts])

  }, [cartContext.cart?.products.length])

  return (
    <View style={{ width: "95%", backgroundColor: 'orange' }}>
      {cartContext.cart?.products.map((product: Product) => (
        <ScrollView
          key={`${product.id}${Math.random()}`}
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
            paddingHorizontal: 5
          }}
        >
          <Image
            source={{ uri: product.image }}
            style={{ width: 80, height: 80, resizeMode: "stretch"}}
          />
          <Text style={{ flex: 1, marginLeft: 15 }}>{product.title}</Text>
        </ScrollView>
      ))}
    </View>
  );
};

export default CartView;
