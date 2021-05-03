import Product from "../../models/product";
import * as actionTypes from "./actionTypes";

export const deleteProductAction = (productId) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    try {
      const res = await fetch(
        `https://mobile-shop-api-default-rtdb.asia-southeast1.firebasedatabase.app/products/${productId}.json?auth=${token}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        throw new Error("Something went wrong while deleing.");
      }

      dispatch({
        type: actionTypes.DELETE_PRODUCT,
        payload: productId,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const addProductAction = (title, description, imageUrl, price) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const userId = getState().auth.userId;

    try {
      const res = await fetch(
        `https://mobile-shop-api-default-rtdb.asia-southeast1.firebasedatabase.app/products.json?auth=${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
            imageUrl,
            price,
            ownerId: userId,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Something went wrong.");
      }

      const data = await res.json();

      dispatch({
        type: actionTypes.ADD_PRODUCT,
        payload: {
          id: data.name,
          title,
          description,
          imageUrl,
          price,
          ownerId: userId,
        },
      });
    } catch (error) {
      throw error;
    }
  };
};

export const updateProductAction = (id, title, description, imageUrl) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    await fetch(
      `https://mobile-shop-api-default-rtdb.asia-southeast1.firebasedatabase.app/products/${id}.json?auth=${token}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          imageUrl,
        }),
      }
    );

    dispatch({
      type: actionTypes.UPDATE_PRODUCT,
      productId: id,
      payload: {
        title,
        description,
        imageUrl,
      },
    });
  };
};

export const fetchProductsAction = () => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;
    try {
      const res = await fetch(
        "https://mobile-shop-api-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
      );
      if (!res.ok) {
        throw new Error("Something went wrong while fetching the data.");
      }

      const data = await res.json();
      let loadedProducts = [];

      for (const key in data) {
        loadedProducts.push(
          new Product(
            key,
            data[key].ownerId,
            data[key].title,
            data[key].imageUrl,
            data[key].description,
            data[key].price
          )
        );
      }

      dispatch({
        type: actionTypes.SET_PRODUCTS,
        payload: loadedProducts,
        userProducts: loadedProducts.filter((p) => p.ownerId === userId),
      });
    } catch (error) {
      throw error;
    }
  };
};
