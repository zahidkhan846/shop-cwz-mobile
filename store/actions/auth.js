import { AsyncStorage } from "react-native";
import * as actionTypes from "./actionTypes";

let timer;

export const autoLoginAcion = () => {
  return {
    type: actionTypes.AUTO_LOGIN,
  };
};

export const signupUserAction = (email, password) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCvR4uGi3AjXxQ9buAq7ZiKZ35gfjoUaeI",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
        }
      );

      if (!res.ok) {
        const errData = await res.json();
        const err = errData.error.message;
        let message = "Something went wrong!";

        if (err === "EMAIL_EXISTS") {
          message = "EMAIL ALREADY EXISTS!";
        }
        throw new Error(message);
      }

      const data = await res.json();

      dispatch(
        authenticate(
          data.idToken,
          data.localId,
          parseInt(data.expiresIn) * 1000
        )
      );
      const expTime = new Date(
        new Date().getTime() + parseInt(data.expiresIn) * 1000
      );
      saveDataToStorage(data.idToken, data.localId, expTime);
    } catch (error) {
      throw error;
    }
  };
};

export const signinUserAction = (email, password) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCvR4uGi3AjXxQ9buAq7ZiKZ35gfjoUaeI",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
        }
      );

      if (!res.ok) {
        const errData = await res.json();
        const err = errData.error.message;
        let message = "Something went wrong!";
        if (err === "EMAIL_NOT_FOUND") {
          message = "EMAIL NOT FOUND!";
        }

        throw new Error(message);
      }

      const data = await res.json();

      dispatch(
        authenticate(
          data.idToken,
          data.localId,
          parseInt(data.expiresIn) * 1000
        )
      );
      const expTime = new Date(
        new Date().getTime() + parseInt(data.expiresIn) * 1000
      );
      saveDataToStorage(data.idToken, data.localId, expTime);
    } catch (error) {
      throw error;
    }
  };
};

export const authenticate = (token, userId, expTime) => {
  return (dispatch) => {
    dispatch(setLogout(expTime));
    dispatch({
      type: actionTypes.AUTH_USER,
      token: token,
      userId: userId,
    });
  };
};

const saveDataToStorage = (token, userId, expDate) => {
  AsyncStorage.setItem(
    "userData",
    JSON.stringify({
      token: token,
      userId: userId,
      expiresIn: expDate.toISOString(),
    })
  );
};

export const logoutAction = () => {
  clearTimer();
  AsyncStorage.removeItem("userData");
  return {
    type: actionTypes.LOGOUT_USER,
  };
};

const clearTimer = () => {
  if (timer) {
    clearTimeout(timer);
  }
};

const setLogout = (expTime) => {
  return (dispatch) => {
    timer = setTimeout(() => {
      dispatch(logoutAction());
    }, expTime);
  };
};
