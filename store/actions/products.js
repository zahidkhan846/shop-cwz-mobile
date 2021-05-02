import Product from "../../models/product";
import * as actionTypes from "./actionTypes";

export const deleteProductAction = (productId) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://mobile-shop-api-default-rtdb.asia-southeast1.firebasedatabase.app/products/${productId}.json`,
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
  return async (dispatch) => {
    try {
      const res = await fetch(
        "https://mobile-shop-api-default-rtdb.asia-southeast1.firebasedatabase.app/products.jso",
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
        },
      });
    } catch (error) {
      throw error;
    }
  };
};

export const updateProductAction = (id, title, description, imageUrl) => {
  return async (dispatch) => {
    await fetch(
      `https://mobile-shop-api-default-rtdb.asia-southeast1.firebasedatabase.app/products/${id}.json`,
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

    const data = await res.json();

    dispatch({
      type: actionTypes.UPDATE_PRODUCT,
      payload: {
        id: data.name,
        title,
        description,
        imageUrl,
      },
    });
  };
};

export const fetchProductsAction = () => {
  return async (dispatch) => {
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
            "u1",
            data[key].title,
            data[key].imageUrl,
            data[key].description,
            data[key].price
          )
        );
      }

      console.log(loadedProducts);
      dispatch({
        type: actionTypes.SET_PRODUCTS,
        payload: loadedProducts,
      });
    } catch (error) {
      throw error;
    }
  };
};
