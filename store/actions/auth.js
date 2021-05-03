import * as actionTypes from "./actionTypes";

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

      dispatch({
        type: actionTypes.SIGNUP_USER,
        token: data.idToken,
        userId: data.localId,
      });
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

      dispatch({
        type: actionTypes.SIGNIN_USER,
        token: data.idToken,
        userId: data.localId,
      });
    } catch (error) {
      throw error;
    }
  };
};
