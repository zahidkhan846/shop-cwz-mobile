import React from "react";
import { StyleSheet, Text } from "react-native";
import { colors } from "../../constants/colors";

const ErrMsg = (props) => {
  return (
    <Text numberOfLines={2} style={styles.alert}>
      {props.error ? (
        <Text>{props.error}</Text>
      ) : (
        <Text>
          Note*
          <Text>
            {" "}
            Title & Description should atleast include 5 and 10 characters
            minimum.
          </Text>
        </Text>
      )}
    </Text>
  );
};

export default ErrMsg;

const styles = StyleSheet.create({
  alert: {
    marginBottom: 10,
    color: colors.danger,
    fontStyle: "italic",
  },
});
