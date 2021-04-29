import Cart from "../../models/cart";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  cart: {},
  cartTotal: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const addedProduct = action.payload;
      const productPrice = addedProduct.price;
      const productTitle = addedProduct.title;
      const productImage = addedProduct.imageUrl;
      const productDesc = addedProduct.description;

      let updatedOrNewCartItem;

      if (state.cart[addedProduct.id]) {
        //   product already exist
        updatedOrNewCartItem = new Cart(
          state.cart[addedProduct.id].quantity + 1,
          productPrice,
          productTitle,
          productImage,
          productDesc,
          state.cart[addedProduct.id].sum + productPrice
        );
        return {
          ...state,
          cart: {
            ...state.cart,
            [addedProduct.id]: updatedOrNewCartItem,
          },
          cartTotal: state.cartTotal + productPrice,
        };
      } else {
        updatedOrNewCartItem = new Cart(
          1,
          productPrice,
          productTitle,
          productImage,
          productDesc,
          productPrice
        );
        return {
          ...state,
          cart: {
            ...state.cart,
            [addedProduct.id]: updatedOrNewCartItem,
          },
          cartTotal: state.cartTotal + productPrice,
        };
      }
    case actionTypes.DELETE_FROM_CART:
      const selectedCartItem = state.cart[action.payload];
      const productQuantity = selectedCartItem.quantity;
      let updatedCartItems;
      if (productQuantity > 1) {
        const updatedCartItem = new Cart(
          selectedCartItem.quantity - 1,
          selectedCartItem.productPrice,
          selectedCartItem.productTitle,
          selectedCartItem.productImage,
          selectedCartItem.productDesc,
          selectedCartItem.sum - selectedCartItem.productPrice
        );
        updatedCartItems = {
          ...state.cart,
          [action.payload]: updatedCartItem,
        };
      } else {
        updatedCartItems = { ...state.cart };
        delete updatedCartItems[action.payload];
      }
      return {
        ...state,
        cart: updatedCartItems,
        cartTotal: state.cartTotal - selectedCartItem.productPrice,
      };

    case actionTypes.CLEAR_CART:
      return {
        initialState,
      };

    case actionTypes.DELETE_PRODUCT:
      if (!state.cart[action.payload]) {
        return state;
      }
      const updatedCart = { ...state.cart };
      const itemTotal = state.cart[action.payload].sum;
      delete updatedCart[action.payload];
      return {
        ...state,
        cart: updatedCart,
        cartTotal: state.cartTotal - itemTotal,
      };

    default:
      return state;
  }
};

export default cartReducer;
