import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import ListItem from "../../components/Product/ListItem";

const UserProductsScreen = () => {
  const userProducts = useSelector((state) => state.products.userProducts);

  return (
    <FlatList
      data={userProducts}
      renderItem={(itemData) => <ListItem product={itemData.item} />}
    />
  );
};

export default UserProductsScreen;

UserProductsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Manage Products",
  };
};
