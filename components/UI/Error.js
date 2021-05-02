import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Error = ({ text }) => {
  return (
    <View style={styles.center}>
      <Text>{text}</Text>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
