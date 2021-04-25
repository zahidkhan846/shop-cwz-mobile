import React from "react";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/UI/ProductCard";
import { addToCartAction } from "../../store/actions/cart";

const HomeScreen = (props) => {
  const products = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();

  const allProducts = (itemData) => {
    const productDetailHandler = () => {
      props.navigation.navigate("ProductDetail", {
        productId: itemData.item.id,
        productTitle: itemData.item.title,
      });
    };
    const addToCardHandler = () => {
      dispatch(addToCartAction(itemData.item));
      console.log(itemData.item);
    };

    return (
      <ProductCard
        data={itemData}
        onView={productDetailHandler}
        onAddCard={addToCardHandler}
      />
    );
  };

  return <FlatList data={products} renderItem={allProducts} />;
};

export default HomeScreen;

HomeScreen.navigationOptions = {
  headerTitle: "Home",
};
