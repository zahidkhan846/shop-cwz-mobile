import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";

export const styles = StyleSheet.create({
  screen: {
    marginVertical: 10,
    width: "100%",
    height: "100%",
  },
  main: {
    height: "82%",
  },
  cartFooter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  text: {
    flex: 1,
    fontFamily: "robotoBold",
    fontSize: 22,
  },
  order: {
    flex: 1,
    backgroundColor: colors.medium,
  },

  disabled: {
    backgroundColor: "lightgrey",
    shadowColor: "white",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 0,
    elevation: 0,
  },

  amount: {
    fontStyle: "italic",
    fontFamily: "robotoThin",
    color: colors.btnPrimary,
  },

  disabledTxt: {
    color: "white",
  },

  orderTxt: {
    color: colors.dark,
  },
});
