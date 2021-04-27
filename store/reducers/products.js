import { allProducts } from "../../db/products";

const initialState = {
  allProducts: allProducts,
  userProducts: allProducts.filter((product) => product.ownerId === "u1"),
};

const productReducer = (state = initialState, action) => {
  return state;
};

export default productReducer;
