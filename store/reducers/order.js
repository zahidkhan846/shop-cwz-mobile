import Order from "../../models/order";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orders: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ORDER:
      const newOrder = new Order(
        action.payload.orderId,
        action.payload.items,
        action.payload.totalPrice,
        action.payload.date
      );
      return {
        ...state,
        orders: state.orders.concat(newOrder),
      };

    case actionTypes.SET_ORDERS:
      return {
        orders: action.orders,
      };
    default:
      return state;
  }
};

export default orderReducer;
