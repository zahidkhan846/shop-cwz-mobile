import * as actionTypes from "../actions/actionTypes";

const initialState = {
  token: null,
  userId: null,
  autoLogin: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTO_LOGIN:
      return {
        ...state,
        autoLogin: true,
      };
    case actionTypes.AUTH_USER:
      return {
        token: action.token,
        userId: action.userId,
      };
    // case actionTypes.SIGNIN_USER:
    //   return {
    //     token: action.token,
    //     userId: action.userId,
    //   };
    case actionTypes.LOGOUT_USER:
      return { ...initialState, autoLogin: true };
    default:
      return state;
  }
};

export default authReducer;
