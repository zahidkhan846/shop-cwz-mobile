import * as actionTypes from "./actionTypes";

export const addOrderAction = (cart, cartTotal) => {
  return {
    type: actionTypes.ADD_ORDER,
    payload: {
      items: cart,
      totalPrice: cartTotal,
    },
  };
};
