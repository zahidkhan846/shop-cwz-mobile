import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Link = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={props.style}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default Link;
