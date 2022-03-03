import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import {Header} from "./components/header"

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "green",
  },
});
