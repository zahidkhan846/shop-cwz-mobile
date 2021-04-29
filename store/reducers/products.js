import { allProducts } from "../../db/products";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  allProducts: allProducts,
  userProducts: allProducts.filter((product) => product.ownerId === "u1"),
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_PRODUCT:
      return {
        ...state,
        userProducts: state.userProducts.filter(
          (product) => product.id !== action.payload
        ),
        allProducts: state.allProducts.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default productReducer;
