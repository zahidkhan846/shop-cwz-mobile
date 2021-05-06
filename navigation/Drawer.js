import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { colors } from "../constants/colors";
import OrderNavigator from "./OrderNavigator";
import ProductNavigator from "./ProductNavigator";
import UserNavigator from "./UserNavigator";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import Button from "../components/UI/Button";
import { StyleSheet, View } from "react-native";
import { logoutAction } from "../store/actions/auth";

function Drawer() {
  const Drawer = createDrawerNavigator();
  const dispatch = useDispatch();

  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <View style={styles.container}>
            <View>
              <DrawerItemList {...props} />
            </View>
            <View>
              <Button
                btnStyle={styles.btn}
                iName="log-out-outline"
                onPress={() => {
                  dispatch(logoutAction());
                }}
              >
                Logout
              </Button>
            </View>
          </View>
        );
      }}
      drawerContentOptions={{
        activeTintColor: colors.primary,
        activeBackgroundColor: colors.medium,
      }}
    >
      <Drawer.Screen
        name="Products"
        component={ProductNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons name="home" size={24} color={props.color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={OrderNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons name="create-outline" size={24} color={props.color} />
          ),
        }}
      />
      <Drawer.Screen
        name="User"
        component={UserNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons name="person-outline" size={24} color={props.color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default Drawer;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 20,
    flex: 1,
  },

  btn: {
    paddingVertical: 25,
    backgroundColor: colors.danger,
  },
});
