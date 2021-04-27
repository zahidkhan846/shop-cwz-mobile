import React from "react";
import { Text } from "react-native";
import { colors } from "../../constants/colors";

const Italic = (props) => {
  return (
    <Text
      style={{
        fontStyle: "italic",
        fontFamily: "robotoReguler",
        color: colors.dark,
        ...props.style,
      }}
    >
      {props.children}
    </Text>
  );
};

export default Italic;
