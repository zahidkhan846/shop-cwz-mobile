import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";

export const styles = StyleSheet.create({
  userScreen: {
    flex: 1,
    justifyContent: "space-between",
  },
  cardContent: {
    padding: 10,
  },

  textBold: {
    fontFamily: "robotoBold",
    marginBottom: 10,
  },

  note: {
    fontStyle: "italic",
    color: colors.danger,
  },

  heading: {
    textAlign: "center",
    textTransform: "uppercase",
    color: colors.success,
    marginBottom: 5,
  },

  btn: {
    paddingVertical: 25,
  },

  light: {
    backgroundColor: colors.btnPrimary,
  },

  dark: {
    backgroundColor: colors.pink,
  },

  btnText: {
    textTransform: "uppercase",
  },
});
