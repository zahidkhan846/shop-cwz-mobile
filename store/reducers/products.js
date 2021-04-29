import { allProducts } from "../../db/products";
import Product from "../../models/product";
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

    case actionTypes.ADD_PRODUCT:
      const newProduct = new Product(
        new Date().toString(),
        "u1",
        action.payload.title,
        action.payload.imageUrl,
        action.payload.description,
        action.payload.price
      );
      return {
        ...state,
        allProducts: state.allProducts.concat(newProduct),
        userProducts: state.userProducts.concat(newProduct),
      };
    case actionTypes.UPDATE_PRODUCT:
      const productIndex = state.userProducts.findIndex(
        (product) => product.id === action.productId
      );

      const updatedProduct = new Product(
        action.productId,
        state.userProducts[productIndex].ownerId,
        action.payload.title,
        action.payload.imageUrl,
        action.payload.description,
        state.userProducts[productIndex].price
      );

      const updatedUserProducts = [...state.userProducts];
      updatedUserProducts[productIndex] = updatedProduct;

      const allProductIndex = state.allProducts.findIndex(
        (product) => product.id === action.productId
      );

      const updatedAllProducts = [...state.allProducts];
      updatedAllProducts[allProductIndex] = updatedProduct;

      return {
        ...state,
        allProducts: updatedAllProducts,
        userProducts: updatedUserProducts,
      };
    default:
      return state;
  }
};

export default productReducer;
