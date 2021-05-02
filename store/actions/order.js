import Order from "../../models/order";
import * as actionTypes from "./actionTypes";

export const fetchOrdersAction = (userId) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://mobile-shop-api-default-rtdb.asia-southeast1.firebasedatabase.app/orders/${userId}.json`
      );

      if (!res.ok) {
        throw new Error("Something went wrong.");
      }

      const data = await res.json();

      console.log(data);

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
  return async (dispatch) => {
    const date = new Date();
    try {
      const res = await fetch(
        "https://mobile-shop-api-default-rtdb.asia-southeast1.firebasedatabase.app/orders/u1.json",
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
