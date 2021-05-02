import React from "react";
import { Platform } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { colors } from "../constants/colors";
import CartScreen from "../screens/shop/CartScreen";
import HomeScreen from "../screens/shop/HomeScreen";
import OrderScreen from "../screens/shop/OrderScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import { Ionicons } from "@expo/vector-icons";
import UserProfileScreen from "../screens/user/UserProfile";
import UserProductsScreen from "../screens/user/UserProducts";
import AddProductScreen from "../screens/user/AddEditProduct";
import AuthScreen from "../screens/auth/AuthRegScreen";
import AuthLogin from "../screens/auth/AuthLogin";

const customheaderBg = Platform.OS === "android" ? colors.primary : "";
const customheaderTint =
  Platform.OS === "android" ? colors.light : colors.primary;

const defaultHeader = {
  headerStyle: {
    backgroundColor: customheaderBg,
  },
  headerTintColor: customheaderTint,
};

const ProductsNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (config) => (
        <Ionicons name="home" size={24} color={config.tintColor} />
      ),
    },
    defaultNavigationOptions: defaultHeader,
  }
);

const OrdersNavigator = createStackNavigator(
  {
    Orders: OrderScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (config) => (
        <Ionicons name="create-outline" size={24} color={config.tintColor} />
      ),
    },
    defaultNavigationOptions: defaultHeader,
  }
);

const UserNavigator = createStackNavigator(
  {
    User: UserProfileScreen,
    UserProducts: UserProductsScreen,
    AddProducts: AddProductScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (config) => (
        <Ionicons name="person-outline" size={24} color={config.tintColor} />
      ),
    },
    defaultNavigationOptions: defaultHeader,
  }
);

const ShopNavigator = createDrawerNavigator(
  {
    Products: ProductsNavigator,
    Orders: OrdersNavigator,
    User: UserNavigator,
  },
  {
    contentOptions: {
      activeTintColor: colors.primary,
      activeBackgroundColor: colors.medium,
      itemsContainerStyle: {
        marginVertical: 20,
      },
    },
  }
);

const AuthNavigator = createStackNavigator(
  {
    AuthRegister: AuthScreen,
    AuthLogin: AuthLogin,
  },
  {
    defaultNavigationOptions: defaultHeader,
  }
);

const MainNavigator = createSwitchNavigator({
  Auth: AuthNavigator,
  Shop: ShopNavigator,
});

export default createAppContainer(MainNavigator);
