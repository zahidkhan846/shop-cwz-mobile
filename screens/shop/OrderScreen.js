import React from "react";
import { FlatList, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import Order from "../../components/Product/Order";
import IconButton from "../../components/UI/IconButton";
import NoItem from "../../components/UI/NoItem";

const OrderScreen = (props) => {
  const orders = useSelector((state) => state.order.orders);

  if (orders.length === 0 || !orders) {
    return (
      <NoItem
        title="No Orders Yet!"
        text="No items found in orders. Tab below to start adding."
        btnText="Order Now"
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      />
    );
  }

  return (
    <FlatList
      data={orders}
      renderItem={(itemData) => <Order order={itemData.item} />}
    />
  );
};

export default OrderScreen;

OrderScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Orders",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={IconButton}>
        <Item
          title="Menu"
          iconName="menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};
