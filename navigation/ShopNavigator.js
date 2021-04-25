import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { colors } from "../constants/colors";
import HomeScreen from "../screens/shop/HomeScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";

const customheaderBg = Platform.OS === "android" ? colors.primary : "";
const customheaderTint =
  Platform.OS === "android" ? colors.light : colors.primary;

const ProductsNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    ProductDetail: ProductDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: customheaderBg,
      },
      headerTintColor: customheaderTint,
    },
  }
);

export default createAppContainer(ProductsNavigator);
