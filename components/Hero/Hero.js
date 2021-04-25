import React from "react";
import { Image, StyleSheet, View } from "react-native";

const Hero = () => {
  return (
    <View style={styles.heroImage}>
      <Image source={require("../../assets/hero.jpg")} />
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  heroImage: {
    flex: 1,
    height: "50%",
    width: "100%",
  },
});
