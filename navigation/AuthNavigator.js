import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AuthLogin, { authLoginOptions } from "../screens/auth/AuthLogin";
import AuthScreen, { authScreenOptions } from "../screens/auth/AuthRegScreen";
import { defaultHeader } from "./ShopNavigator";

function AuthNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={defaultHeader}>
      <Stack.Screen
        name="AuthRegister"
        component={AuthScreen}
        options={authScreenOptions}
      />
      <Stack.Screen
        name="AuthLogin"
        component={AuthLogin}
        options={authLoginOptions}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
