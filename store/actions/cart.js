import * as actionTypes from "./actionTypes";

export const addToCartAction = (product) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: product,
  };
};
