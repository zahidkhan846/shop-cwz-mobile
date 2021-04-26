import * as actionTypes from "./actionTypes";

export const addToCartAction = (product) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: product,
  };
};

export const deleteFromCartAction = (productId) => {
  return {
    type: actionTypes.DELETE_FROM_CART,
    payload: productId,
  };
};

export const clearCartAction = () => {
  return {
    type: actionTypes.CLEAR_CART,
  };
};
