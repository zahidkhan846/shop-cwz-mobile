import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import productReducer from "./store/reducers/products";
import { useFonts } from "expo-font";
import cartReducer from "./store/reducers/cart";
import orderReducer from "./store/reducers/order";
import thunk from "redux-thunk";
import authReducer from "./store/reducers/auth";
import NavContainer from "./navigation/NavContainer";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  order: orderReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  const [loaded] = useFonts({
    robotoThin: require("./assets/fonts/Roboto-Thin.ttf"),
    robotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    robotoReguler: require("./assets/fonts/Roboto-Regular.ttf"),
    robotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavContainer />
    </Provider>
  );
}
