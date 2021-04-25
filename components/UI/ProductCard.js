import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import { colors } from "../../constants/colors";

const ProductCard = ({ data, onView, onAddCard }) => {
  let CustomButton = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    CustomButton = TouchableNativeFeedback;
  }

  return (
    <View style={styles.card}>
      <CustomButton onPress={onView} useForeground>
        <View style={styles.cardItems}>
          <Image style={styles.image} source={{ uri: data.item.imageUrl }} />
          <View style={styles.content}>
            <Text style={styles.title}>{data.item.title}</Text>
            <View style={styles.priceSection}>
              <Text style={styles.priceTitle}>Price:</Text>
              <Text style={styles.price}>${data.item.price.toFixed(2)}</Text>
            </View>
            <View style={styles.btnContainer}>
              <View style={{ ...styles.btn, ...styles.detailBtn }}>
                <Button
                  color={colors.btnPrimary}
                  title="View Detail"
                  onPress={onView}
                />
              </View>
              <View style={{ ...styles.btn, ...styles.cardBtn }}>
                <Button
                  color={colors.success}
                  title="Add to Cart"
                  onPress={onAddCard}
                />
              </View>
            </View>
          </View>
        </View>
      </CustomButton>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    margin: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 10,
    backgroundColor: colors.light,
    height: 400,
    borderRadius: 10,
    overflow: "hidden",
  },

  cardItems: {
    flex: 1,
    justifyContent: "space-between",
  },

  content: {
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
  },

  image: {
    height: "70%",
    width: "100%",
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: colors.pink,
    textTransform: "uppercase",
    fontFamily: "robotoBold",
  },

  priceSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontStyle: "italic",
    marginRight: 5,
  },

  priceTitle: {
    color: colors.lightGrey,
    fontStyle: "normal",
    marginRight: 5,
  },

  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  btn: { flex: 1 },

  detailBtn: {
    marginRight: 10,
  },
});
