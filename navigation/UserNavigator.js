import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AddProductScreen, {
  addProductptions,
} from "../screens/user/AddEditProduct";
import UserProductsScreen, {
  userProductsOption,
} from "../screens/user/UserProducts";
import UserProfileScreen, {
  userProfileOption,
} from "../screens/user/UserProfile";
import { defaultHeader } from "./ShopNavigator";

function UserNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={defaultHeader}>
      <Stack.Screen
        name="User"
        component={UserProfileScreen}
        options={userProfileOption}
      />
      <Stack.Screen
        name="UserProducts"
        component={UserProductsScreen}
        options={userProductsOption}
      />
      <Stack.Screen
        name="AddProducts"
        component={AddProductScreen}
        options={addProductptions}
      />
    </Stack.Navigator>
  );
}

export default UserNavigator;
