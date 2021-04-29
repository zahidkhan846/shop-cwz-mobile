import * as actionTypes from "./actionTypes";

export const deleteProductAction = (productId) => {
  return {
    type: actionTypes.DELETE_PRODUCT,
    payload: productId,
  };
};
