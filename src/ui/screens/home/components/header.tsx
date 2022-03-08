import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

type HeaderProps = {
  onPress: any;
};

const Header: React.FC<HeaderProps> = ({ onPress }) => {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          <Ionicons
            name="cart"
            size={30}
            color="white"
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 90,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: '#ccc'
  },
});
