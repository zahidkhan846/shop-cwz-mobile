import React from "react";
import AddEditForm from "../../components/Product/AddEditProduct";

const AddProductScreen = (props) => {
  const productId = props.route.params?.productId;

  return <AddEditForm productId={productId} navigation={props.navigation} />;
};

export default AddProductScreen;

export const addProductptions = (navData) => {
  const productId = navData.route.params?.productId;
  return {
    headerTitle: productId ? "Edit Product" : "Add Product",
  };
};
