import React from "react";
import { StyleSheet, Text } from "react-native";

const Paragraph = (props) => {
  return (
    <Text {...props} style={{ ...styles.paragraph, ...props.style }}>
      {props.children}
    </Text>
  );
};

export default Paragraph;

const styles = StyleSheet.create({
  paragraph: {
    fontFamily: "robotoReguler",
    fontSize: 14,
  },
});
