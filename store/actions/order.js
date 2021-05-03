import Order from "../../models/order";
import * as actionTypes from "./actionTypes";

export const fetchOrdersAction = () => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;
    try {
      const res = await fetch(
        `https://mobile-shop-api-default-rtdb.asia-southeast1.firebasedatabase.app/orders/${userId}.json`
      );

      if (!res.ok) {
        throw new Error("Something went wrong.");
      }

      const data = await res.json();

      const orders = [];
      for (const key in data) {
        orders.push(
          new Order(
            key,
            data[key].cart,
            data[key].cartTotal,
            new Date(data[key].date)
          )
        );
      }
      dispatch({
        type: actionTypes.SET_ORDERS,
        orders: orders,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const addOrderAction = (cart, cartTotal) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const userId = getState().auth.userId;

    const date = new Date();
    try {
      const res = await fetch(
        `https://mobile-shop-api-default-rtdb.asia-southeast1.firebasedatabase.app/orders/${userId}.json?auth=${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cart,
            cartTotal,
            date: date.toISOString(),
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Something went wrong.");
      }

      const data = await res.json();

      dispatch({
        type: actionTypes.ADD_ORDER,
        payload: {
          orderId: data.name,
          items: cart,
          totalPrice: cartTotal,
          date: date,
        },
      });
    } catch (err) {
      throw err;
    }
  };
};
