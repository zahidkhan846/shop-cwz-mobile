import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";

export const styles = StyleSheet.create({
  content: {
    padding: 20,
  },

  heading: {
    marginBottom: 15,
    color: colors.pink,
  },

  formControl: {
    marginBottom: 12,
  },

  label: {
    fontFamily: "robotoBold",
    marginBottom: 2,
  },

  input: {
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    padding: 4,
    fontFamily: "robotoReguler",
  },

  seller: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  login: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
  },

  loginText: {
    color: colors.lightGrey,
    fontStyle: "italic",
  },

  link: {
    fontFamily: "robotoBold",
    textTransform: "capitalize",
    // fontSize: 16,
    color: colors.pink,
  },

  btn: {
    margin: 10,
    paddingVertical: 10,
  },

  loginBtn: {
    backgroundColor: colors.pink,
  },

  logoutBtn: {
    backgroundColor: colors.btnPrimary,
  },

  errText: {
    fontStyle: "italic",
    color: colors.lightGrey,
  },

  errTextLogin: {
    fontStyle: "italic",
    color: colors.lightGrey,
    marginBottom: 10,
  },
});
