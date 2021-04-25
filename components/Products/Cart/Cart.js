import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { colors } from "../../../constants/colors";
import Icon from "../../UI/Icon";

const Cart = () => {
  return (
    <View style={styles.cartCard}>
      <View style={styles.cardContent}>
        <View style={styles.cartHead}>
          <Text style={styles.headerTitle}>Title</Text>
          <Image
            style={styles.image}
            source={require("../../../assets/hero.jpg")}
          />
        </View>
        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          adipisci!
        </Text>
        <View style={styles.cartFooter}>
          <View>
            <Text style={{ color: colors.primary }}>
              <Text style={styles.footerTitle}>Price:</Text> $20.99
            </Text>
            <Text style={{ color: colors.primary }}>
              <Text style={styles.footerTitle}>Quantity:</Text> 2
            </Text>
          </View>
          <HeaderButtons HeaderButtonComponent={Icon}>
            <Item
              title="Cart"
              iconName="trash-outline"
              color={colors.danger}
              onPress={() => {}}
            />
          </HeaderButtons>
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
