import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import Heading from "../../components/UI/Heading";
import IconButton from "../../components/UI/IconButton";
import NoItem from "../../components/UI/NoItem";
import ProductCard from "../../components/UI/ProductCard";
import { colors } from "../../constants/colors";
import { addToCartAction } from "../../store/actions/cart";
import { fetchProductsAction } from "../../store/actions/products";

const HomeScreen = (props) => {
  const products = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadProducts = useCallback(async () => {
    setError("");
    try {
      await dispatch(fetchProductsAction());
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    const willFocusSub = props.navigation.addListener(
      "willFocus",
      loadProducts
    );
    return () => {
      willFocusSub.remove();
    };
  }, [loadProducts]);

  useEffect(() => {
    loadProducts();
  }, [dispatch, loadProducts]);

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

  if (error) {
    return (
      <NoItem
        title="An error occured!"
        text={error}
        btnText="Try Again"
        icon="reload-outline"
        onPress={loadProducts}
      />
    );
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Heading style={{ color: colors.primary }}>Loading...</Heading>
      </View>
    );
  }

  if (!loading && products.length === 0) {
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

  return <FlatList data={products} renderItem={allProducts} />;
};

export default HomeScreen;

HomeScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Home",
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
