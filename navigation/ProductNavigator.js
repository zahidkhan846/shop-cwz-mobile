import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CartScreen, { cartOption } from "../screens/shop/CartScreen";
import ProductDetailScreen, {
  productDetailOption,
} from "../screens/shop/ProductDetailScreen";
import HomeScreen, { homeOptions } from "../screens/shop/HomeScreen";
import { defaultHeader } from "./ShopNavigator";

function ProductNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={defaultHeader}>
      <Stack.Screen name="Home" component={HomeScreen} options={homeOptions} />
      <Stack.Screen
        name="ProductDetail"
        options={productDetailOption}
        component={ProductDetailScreen}
      />
      <Stack.Screen name="Cart" component={CartScreen} options={cartOption} />
    </Stack.Navigator>
  );
}

export default ProductNavigator;
