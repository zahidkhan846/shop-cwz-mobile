import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Cart from "../../components/Products/Cart/Cart";
import Button from "../../components/UI/Button";
import { colors } from "../../constants/colors";

function CartScreen() {
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  const cart = useSelector((state) => state.cart.cart);

  console.log(cart);
  const transformedCart = [];

  for (const key in cart) {
    transformedCart.push({
      productId: key,
      productTitle: cart[key].productTitle,
      productPrice: cart[key].productPrice,
      productDesc: cart[key].productDesc,
      productImage: cart[key].productImage,
      quantity: cart[key].quantity,
      sum: cart[key].sum,
    });

    console.log(transformedCart);
  }
  return (
    <View style={styles.screen}>
      <Cart />
      <View style={styles.cartFooter}>
        <Text style={styles.text}>
          Total:<Text style={styles.amount}> ${cartTotal.toFixed(2)}</Text>
        </Text>
        <Button
          disabled={transformedCart.length === 0}
          btnStyle={
            transformedCart.length === 0 ? styles.disabled : styles.order
          }
          iName="checkmark-outline"
          iColor={transformedCart.length === 0 ? "white" : colors.dark}
          textStyle={
            transformedCart.length === 0 ? styles.disabledTxt : styles.orderTxt
          }
          onPress={() => {
            console.log("Ordered");
          }}
        >
          Order Now
        </Button>
      </View>
    </View>
  );
}

export default CartScreen;

const styles = StyleSheet.create({
  screen: {
    marginVertical: 10,
  },
  cartFooter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  text: {
    flex: 1,
    fontFamily: "robotoBold",
    fontSize: 22,
  },
  order: {
    flex: 1,
    backgroundColor: colors.medium,
  },

  disabled: {
    backgroundColor: "lightgrey",
    shadowColor: "white",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 0,
    elevation: 0,
  },

  amount: {
    fontStyle: "italic",
    fontFamily: "robotoThin",
    color: colors.btnPrimary,
  },

  disabledTxt: {
    color: "white",
  },

  orderTxt: {
    color: colors.dark,
  },
});
