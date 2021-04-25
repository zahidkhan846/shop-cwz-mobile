import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const Button = (props) => {
  let CustomButton = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    CustomButton = TouchableNativeFeedback;
  }

  return (
    <CustomButton {...props} onPress={props.onPress}>
      <View style={{ ...styles.btn, ...props.btnStyle }}>
        <Text style={{ ...styles.text, ...props.textStyle }}>
          {props.children}
        </Text>
        <Ionicons
          name={props.iName || "sad"}
          color={props.iColor || "white"}
          size={22}
        />
      </View>
    </CustomButton>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
    elevation: 10,
    backgroundColor: colors.success,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 7,
    paddingHorizontal: 14,
    flexDirection: "row",
    flex: 1,
  },

  text: {
    color: colors.light,
    textTransform: "capitalize",
    marginRight: 5,
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: "robotoBold",
  },
});
