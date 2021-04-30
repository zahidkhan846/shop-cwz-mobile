import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../../constants/colors";

const Input = (props) => {
  return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        style={styles.input}
        {...props}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontFamily: "robotoBold",
  },
  input: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    marginBottom: 10,
    width: "100%",
    paddingHorizontal: 5,
    paddingVertical: 7,
    fontSize: 16,
  },

  formControl: {
    marginBottom: 5,
  },
});
