import Order from "../../models/order";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orders: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ORDER:
      const newOrder = new Order(
        new Date().toString(),
        action.payload.items,
        action.payload.totalPrice,
        new Date()
      );
      return {
        ...state,
        orders: state.orders.concat(newOrder),
      };
    default:
      return state;
  }
};

export default orderReducer;
