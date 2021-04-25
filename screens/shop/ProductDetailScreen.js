import React from "react";
import { useSelector } from "react-redux";
import ProductDetail from "../../components/Products/Product/ProductDetail";

const ProductDetailScreen = (props) => {
  const productId = props.navigation.getParam("productId");

  const allProducts = useSelector((state) => state.products.allProducts);

  const singleProduct = allProducts.find((product) => product.id === productId);

  return <ProductDetail product={singleProduct} />;
};

export default ProductDetailScreen;

ProductDetailScreen.navigationOptions = (data) => {
  const productTitle = data.navigation.getParam("productTitle");

  return {
    headerTitle: productTitle,
  };
};
