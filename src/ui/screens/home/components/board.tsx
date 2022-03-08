import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { Rating } from "react-native-ratings";
import { Product } from "../../../../domain/product";

export type ProductListener = {
  product: Product;
  onPress?: any;
}

type CardProps = {
  productListener: ProductListener;
  style?: ViewStyle;
};

type BoardProps = {
  products: ProductListener[];
  style?: ViewStyle;
};

const MainCard: React.FC<CardProps> = ({ productListener, style }) => {
  return (
    <TouchableOpacity
      style={{ ...mainCardStyles.container, ...style }}
      onPress={productListener?.onPress}
    >
      <View style={mainCardStyles.mainItemContainer}>
        <Image
          source={{ uri: productListener.product.image }}
          style={mainCardStyles.productImg}
        />
        <Rating
          type="star"
          ratingCount={5}
          startingValue={productListener.product.rating.rate}
          imageSize={30}
          ratingBackgroundColor={"red"}
        />
      </View>
      <Text style={mainCardStyles.text}>{productListener.product.title}</Text>
    </TouchableOpacity>
  );
};

const SecondaryCard: React.FC<CardProps> = ({ productListener, style }) => {
  return (
    <TouchableOpacity
      style={{ ...secondaryCardStyles.container, ...style }}
      onPress={productListener?.onPress}
    >
      <View style={secondaryCardStyles.mainItemContainer}>
        <Image
          source={{ uri: productListener.product.image }}
          style={secondaryCardStyles.productImg}
        />
        <Text style={secondaryCardStyles.text}>{productListener.product.title}</Text>
      </View>
      <Rating
        type="star"
        ratingCount={5}
        startingValue={productListener.product.rating.rate}
        imageSize={30}
        ratingBackgroundColor={"red"}
        style={{ marginBottom: 10 }}
      />
    </TouchableOpacity>
  );
};

const Board: React.FC<BoardProps> = ({ products, style }) => {
  if (!products?.length) return <></>

  return (
    <View style={{ ...boardStyles.container, ...style }}>
      <MainCard productListener={products[0]} />
      <View style={{ flex: 0.05 }} />
      <View style={boardStyles.secondaryItemsContainer}>
        <SecondaryCard productListener={products[1]} />
        <View style={{ flex: 0.05 }} />
        <SecondaryCard productListener={products[2]} />
      </View>
    </View>
  );
};

export default Board;

const boardStyles = StyleSheet.create({
  container: {
    height: 400,
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryItemsContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
  },
});

const mainCardStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
    borderRadius: 10,
  },
  mainItemContainer: {
    flex: 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  productImg: {
    flex: 1,
    aspectRatio: 1,
    resizeMode: "contain",
    borderRadius: 30,
    maxHeight: 100,
    marginBottom: "10%",
  },
  text: {
    flex: 2,
    fontWeight: "bold",
  },
});

const secondaryCardStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
    borderRadius: 10,
  },
  mainItemContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  productImg: {
    flex: 1,
    aspectRatio: 1,
    resizeMode: "contain",
    borderRadius: 30,
    maxHeight: 100,
  },
  text: {
    flex: 2,
    fontWeight: "bold",
  },
});
