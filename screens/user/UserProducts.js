import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import ListItem from "../../components/Product/ListItem";
import NoItem from "../../components/UI/NoItem";

const UserProductsScreen = (props) => {
  const userProducts = useSelector((state) => state.products.userProducts);

  if (userProducts.length === 0 || !userProducts) {
    return (
      <NoItem
        title="No Item Availble!"
        text="Add new items to start selling, fallow the link."
        btnText="Add New Items"
        icon="create-outline"
        onPress={() => props.navigation.navigate("AddProducts")}
      />
    );
  }

  return (
    <FlatList
      data={userProducts}
      renderItem={(itemData) => (
        <ListItem
          product={itemData.item}
          onPress={() =>
            props.navigation.navigate("AddProducts", {
              productId: itemData.item.id,
            })
          }
        />
      )}
    />
  );
};

export default UserProductsScreen;

export const userProductsOption = (navData) => {
  return {
    headerTitle: "Manage Products",
  };
};
