import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import {
  createDrawerNavigator,
  DrawerNavigatorItems,
} from "react-navigation-drawer";
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
import Start from "../screens/Start";
import Button from "../components/UI/Button";
import { useDispatch } from "react-redux";
import { logoutAction } from "../store/actions/auth";

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
    contentComponent: (props) => {
      const dispatch = useDispatch();

      return (
        <View style={styles.container}>
          <View>
            <DrawerNavigatorItems {...props} />
          </View>
          <View>
            <Button
              btnStyle={styles.btn}
              iName="log-out-outline"
              onPress={() => {
                dispatch(logoutAction());
                // props.navigation.navigate("AuthRegister");
              }}
            >
              Logout
            </Button>
          </View>
        </View>
      );
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
  Start: Start,
  Auth: AuthNavigator,
  Shop: ShopNavigator,
});

export default createAppContainer(MainNavigator);

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  btn: {
    paddingVertical: 25,
    backgroundColor: colors.danger,
  },
});
