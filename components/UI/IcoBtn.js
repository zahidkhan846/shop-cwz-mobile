import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IcoBtn = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Ionicons name={props.iconName} color={props.color} size={24} />
    </TouchableOpacity>
  );
};

export default IcoBtn;
