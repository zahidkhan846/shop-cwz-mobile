import React from "react";
import Form from "../../components/UI/Form";

const AddProductScreen = (props) => {
  const productId = props.navigation.getParam("productId");

  return <Form productId={productId} navigation={props.navigation} />;
};

export default AddProductScreen;

AddProductScreen.navigationOptions = (navData) => {
  const productId = navData.navigation.getParam("productId");
  return {
    headerTitle: productId ? "Edit Product" : "Add Product",
  };
};
