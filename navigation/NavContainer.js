import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./Drawer";
import AuthNavigator from "./AuthNavigator";
import Start from "../screens/Start";

function NavContainer() {
  const auth = useSelector((state) => !!state.auth.token);
  const isAutoLogin = useSelector((state) => state.auth.autoLogin);

  return (
    <NavigationContainer>
      {auth && <Drawer />}
      {!auth && isAutoLogin && <AuthNavigator />}
      {!auth && !isAutoLogin && <Start />}
    </NavigationContainer>
  );
}

export default NavContainer;
