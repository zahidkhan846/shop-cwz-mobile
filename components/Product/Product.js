import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { colors } from "../../constants/colors";
import Italic from "../UI/Italic";
import Paragraph from "../UI/Paragraph";

const Product = ({ product }) => {
  return (
    <View style={styles.singleProduct}>
      <View style={styles.productText}>
        <Paragraph style={styles.bold}>{product.productTitle}</Paragraph>
        <Paragraph numberOfLines={1} style={{ paddingRight: 5 }}>
          {product.productDesc}
        </Paragraph>
        <Paragraph style={styles.grey}>
          Price: <Italic>${product.productPrice}</Italic>
        </Paragraph>
        <Paragraph style={styles.grey}>
          Quantity: <Italic>{product.quantity}</Italic>
        </Paragraph>
      </View>
      <View>
        <Image
          style={styles.productPic}
          source={{ uri: product.productImage }}
        />
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  singleProduct: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },

  productText: {
    flex: 1,
  },
  productPic: {
    height: 90,
    width: 90,
    borderRadius: 45,
  },

  bold: {
    fontFamily: "robotoBold",
    color: colors.success,
  },

  grey: {
    color: "grey",
  },
});
