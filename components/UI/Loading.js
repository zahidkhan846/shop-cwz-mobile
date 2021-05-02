import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";
import Heading from "./Heading";

const Loading = ({ color, size }) => {
  return (
    <View style={styles.center}>
      <ActivityIndicator
        size={size || "large"}
        color={color || colors.primary}
      />
      <Heading style={{ color: color || colors.primary }}>Loading...</Heading>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
