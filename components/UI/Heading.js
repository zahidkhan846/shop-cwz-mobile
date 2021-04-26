import React from "react";
import { StyleSheet, Text } from "react-native";

const Heading = (props) => {
  return (
    <Text style={{ ...styles.heading, ...props.style }}>{props.children}</Text>
  );
};

export default Heading;

const styles = StyleSheet.create({
  heading: { fontFamily: "robotoBold", fontSize: 24 },
});
