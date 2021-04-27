import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";
import Heading from "../UI/Heading";

const ListItem = ({ product }) => {
  console.log(product);
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.info}>
          <Heading style={styles.heading}>{product.title}</Heading>
          <Text style={styles.my5}>
            Price: $<Text style={styles.i}>{product.price}</Text>
          </Text>
          <Text numberOfLines={2} style={{ ...styles.grey, ...styles.i }}>
            {product.description}
          </Text>
        </View>
        <View style={styles.img}>
          <Image
            source={{ uri: product.imageUrl }}
            style={styles.productImage}
          />
        </View>
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.btn}>
          <Button color={colors.danger} title="Delete" />
        </View>
        <View style={styles.btn}>
          <Button color={colors.success} title="Edit" />
        </View>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },

  header: {
    flexDirection: "row",
    marginBottom: 5,
  },

  info: {
    flex: 1,
    marginRight: 10,
  },

  heading: {
    fontSize: 18,
    color: colors.primary,
  },

  bold: {
    fontFamily: "robotoBold",
  },

  i: {
    fontStyle: "italic",
  },

  my5: {
    marginVertical: 5,
  },

  grey: {
    color: "grey",
  },

  productImage: {
    width: 100,
    height: 100,
  },

  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  btn: {
    width: 100,
  },
});
