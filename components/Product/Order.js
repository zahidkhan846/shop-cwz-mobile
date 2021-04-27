import moment from "moment";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";
import Italic from "../UI/Italic";
import Paragraph from "../UI/Paragraph";
import Product from "./Product";

const Order = ({ order }) => {
  const products = order.cartItems.map((item) => item);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Paragraph numberOfLines={1} style={styles.orderId}>
          <Text>Order Id:</Text>
          <Italic style={{ color: colors.primary }}>{order.id}</Italic>
        </Paragraph>
        <View style={styles.headerHead}>
          <View>
            <Paragraph style={styles.headTitle}>Total Price</Paragraph>
            <Paragraph>${order.totalAmount.toFixed(2)}</Paragraph>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Paragraph style={styles.headTitle}>Ordered on</Paragraph>
            <Paragraph>
              {moment(order.createdAt).format("MMMM Do YYYY, h:mma")}
            </Paragraph>
          </View>
        </View>
      </View>
      <View style={styles.main}>
        {products.map((product) => (
          <Product key={product.productId} product={product} />
        ))}
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  card: {
    margin: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 10,
    backgroundColor: colors.light,
    borderRadius: 10,
    overflow: "hidden",
  },

  header: {
    backgroundColor: colors.medium,
    padding: 10,
  },

  orderId: {
    color: colors.primary,
    fontFamily: "robotoBold",
    marginVertical: 5,
  },

  headerHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headTitle: { fontFamily: "robotoBold", fontSize: 16 },

  main: {
    backgroundColor: "white",
    padding: 10,
  },
});
