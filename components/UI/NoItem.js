import React from "react";
import { StyleSheet, View } from "react-native";
import Button from "./Button";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const NoItem = (props) => {
  return (
    <View style={styles.container}>
      <Heading style={styles.heading}>{props.title}</Heading>
      <Paragraph style={styles.para}>{props.text}</Paragraph>
      <Button onPress={props.onPress} iName="home" btnStyle={styles.btn}>
        {props.btnText || "Shop Now"}
      </Button>
    </View>
  );
};

export default NoItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: 20,
  },

  btn: {
    flex: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
  },

  heading: {
    textAlign: "center",
    marginBottom: 10,
  },

  para: {
    textAlign: "center",
  },
});
