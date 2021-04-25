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
          productPrice,
          productDesc
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

    default:
      return state;
  }
};

export default cartReducer;
