import React from "react";
import { StyleSheet, View } from "react-native";
import Button from "./Button";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const NoItem = (props) => {
  return (
    <View style={styles.container}>
      <Heading style={styles.heading}>{props.title}</Heading>
      <Paragraph>{props.text}</Paragraph>
      <Button onPress={props.onPress} iName="home" btnStyle={styles.btn}>
        Go to Home
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
  },

  btn: {
    flex: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
  },

  heading: {
    marginBottom: 10,
  },
});
