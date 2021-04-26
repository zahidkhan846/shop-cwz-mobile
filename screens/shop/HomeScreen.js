import React from "react";
import { FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "../../components/UI/IconButton";
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

HomeScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Home",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={IconButton}>
        <Item
          title="Cart"
          iconName="cart"
          onPress={() => {
            navData.navigation.navigate("Cart");
          }}
        />
      </HeaderButtons>
    ),
  };
};
