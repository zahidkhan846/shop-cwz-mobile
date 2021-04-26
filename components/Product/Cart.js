import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { colors } from "../../constants/colors";
import { deleteFromCartAction } from "../../store/actions/cart";
import IcoBtn from "../UI/IcoBtn";

const Cart = ({ data }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteFromCartAction(data.productId));
  };

  return (
    <View style={styles.cartCard}>
      <View style={styles.cardContent}>
        <View style={styles.cartHead}>
          <Text style={styles.headerTitle}>{data.productTitle}</Text>
          <Image style={styles.image} source={{ uri: data.productImage }} />
        </View>
        <Text style={styles.desc}>{data.productDesc}</Text>
        <View style={styles.cartFooter}>
          <View>
            <Text style={{ color: colors.primary }}>
              <Text style={styles.footerTitle}>Price:</Text> $
              {data.productPrice.toFixed(2)}
            </Text>
            <Text style={{ color: colors.primary }}>
              <Text style={styles.footerTitle}>Quantity:</Text> {data.quantity}
            </Text>
          </View>
          <IcoBtn
            onPress={onDelete}
            iconName="trash-outline"
            color={colors.danger}
          />
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cartCard: {
    margin: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 10,
    backgroundColor: colors.light,
    borderRadius: 10,
  },

  cardContent: {
    padding: 10,
  },

  cartHead: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    flex: 1,
    fontFamily: "robotoBold",
    fontSize: 22,
  },

  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },

  desc: {
    marginVertical: 10,
    color: "grey",
    fontFamily: "robotoReguler",
    fontStyle: "italic",
  },

  cartFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  footerTitle: {
    fontStyle: "italic",
    color: "grey",
  },
});
