import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../../constants/colors";

const Card = ({ children, style }) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    margin: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 10,
    backgroundColor: colors.light,
    borderRadius: 10,
    overflow: "hidden",
  },
});
