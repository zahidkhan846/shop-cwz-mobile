import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../../constants/colors";
import { addToCartAction } from "../../../store/actions/cart";
import Button from "../../UI/Button";

const ProductDetail = ({ product }) => {
  const cartValue = useSelector((state) => state.cart.cart);

  console.log(cartValue);

  dispatch = useDispatch();

  const handleAddCart = () => {
    dispatch(addToCartAction(product));
  };
  const handleAddWish = () => {
    console.log("Clicked");
  };

  return (
    <ScrollView>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <View style={styles.detail}>
        <Text style={styles.title}>{product.title}</Text>
        <View style={styles.priceSec}>
          <Text>Price:</Text>
          <Text style={styles.price}>${product.price}</Text>
        </View>
        <Text style={styles.desc}>{product.description}</Text>
      </View>
      <View style={styles.btnContainer}>
        <Button onPress={handleAddCart} iName="cart" iColor={colors.light}>
          Add To Cart
        </Button>
        <Button
          btnStyle={styles.wishlistBtn}
          onPress={handleAddWish}
          iName="heart"
          iColor={colors.light}
        >
          Add To Wislist
        </Button>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  detail: {
    padding: 10,
  },

  image: { height: 400, width: "100%" },

  title: {
    fontSize: 24,
    color: colors.dark,
    marginBottom: 5,
    textAlign: "center",
    textTransform: "uppercase",
  },

  price: {
    fontStyle: "italic",
    fontSize: 22,
    color: colors.secondary,
    marginBottom: 5,
  },

  desc: {
    fontSize: 16,
    color: colors.dark,
  },

  wishlistBtn: {
    backgroundColor: colors.pink,
  },

  btnContainer: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
  },
});
