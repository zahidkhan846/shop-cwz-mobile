import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, FlatList, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../../components/Product/Cart";
import Button from "../../components/UI/Button";
import NoItem from "../../components/UI/NoItem";
import { colors } from "../../constants/colors";
import { addOrderAction } from "../../store/actions/order";
import { clearCartAction } from "../../store/actions/cart";
import { styles } from "../../styles/cartScreenStyle";

function CartScreen(props) {
  const cart = useSelector((state) => state.cart.cart);
  const cartTotal = useSelector((state) => state.cart.cartTotal);

  const transformedCart = [];

  const dispatch = useDispatch();

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
  }

  if (transformedCart.length > 0) {
    transformedCart.sort((a, b) => (a.productId > b.productId ? 1 : -1));
  }

  if (transformedCart.length === 0 || !transformedCart) {
    return (
      <NoItem
        title="Your Cart is Empty!"
        text="We could not find anything in cart tap below to add products in your cart."
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      />
    );
  }

  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");

  // const handleOrder = async () => {
  //   setLoading(true);
  //   setError("");
  //   try {
  //     await dispatch(addOrderAction(transformedCart, cartTotal));
  //     dispatch(clearCartAction());
  //     props.navigation.navigate("Home");
  //     setLoading(false);
  //   } catch (err) {
  //     setError(err.message);
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   if (error) {
  //     Alert.alert("An error occured!", error, [{ text: "Okey" }]);
  //   }
  // }, [error]);

  return (
    <View style={styles.screen}>
      <View style={styles.main}>
        <FlatList
          data={transformedCart}
          keyExtractor={(item) => item.productId}
          renderItem={(itemData) => <Cart data={itemData.item} />}
        />
      </View>
      <View style={styles.cartFooter}>
        <Text style={styles.text}>
          Total:<Text style={styles.amount}> ${cartTotal.toFixed(2)}</Text>
        </Text>
        {/* {loading ? (
          <ActivityIndicator size="small" color={colors.primary} />
        ) : ( */}
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
            dispatch(addOrderAction(transformedCart, cartTotal));
            dispatch(clearCartAction());
          }}
        >
          Order Now
        </Button>
        {/* )} */}
      </View>
    </View>
  );
}

export default CartScreen;

CartScreen.navigationOptions = () => {
  return {
    headerTitle: "Your Cart",
  };
};
