import * as actionTypes from "./actionTypes";

export const deleteProductAction = (productId) => {
  return {
    type: actionTypes.DELETE_PRODUCT,
    payload: productId,
  };
};

export const addProductAction = (title, description, imageUrl, price) => {
  return {
    type: actionTypes.ADD_PRODUCT,
    payload: {
      title,
      description,
      imageUrl,
      price,
    },
  };
};

export const updateProductAction = (id, title, description, imageUrl) => {
  return {
    type: actionTypes.UPDATE_PRODUCT,
    productId: id,
    payload: {
      title,
      description,
      imageUrl,
    },
  };
};
