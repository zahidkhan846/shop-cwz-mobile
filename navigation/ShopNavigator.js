import { Platform } from "react-native";
import { colors } from "../constants/colors";

const customheaderBg = Platform.OS === "android" ? colors.primary : "";
const customheaderTint =
  Platform.OS === "android" ? colors.light : colors.primary;

export const defaultHeader = {
  headerStyle: {
    backgroundColor: customheaderBg,
  },
  headerTintColor: customheaderTint,
};
