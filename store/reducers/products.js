import { allProducts } from "../../db/products";

const initialState = {
  allProducts: allProducts,
  userProducts: [],
};

const productReducer = (state = initialState, action) => {
  return state;
};

export default productReducer;
