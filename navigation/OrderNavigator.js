import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { defaultHeader } from "./ShopNavigator";
import OrderScreen, { orderOptions } from "../screens/shop/OrderScreen";

function OrderNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={defaultHeader}>
      <Stack.Screen
        name="Orders"
        component={OrderScreen}
        options={orderOptions}
      />
    </Stack.Navigator>
  );
}

export default OrderNavigator;
