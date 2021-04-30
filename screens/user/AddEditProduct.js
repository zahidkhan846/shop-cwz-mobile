import React from "react";
import AddEditForm from "../../components/Product/AddEditProduct";

const AddProductScreen = (props) => {
  const productId = props.navigation.getParam("productId");

  return <AddEditForm productId={productId} navigation={props.navigation} />;
};

export default AddProductScreen;

AddProductScreen.navigationOptions = (navData) => {
  const productId = navData.navigation.getParam("productId");
  return {
    headerTitle: productId ? "Edit Product" : "Add Product",
  };
};
