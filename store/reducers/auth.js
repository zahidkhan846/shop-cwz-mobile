import * as actionTypes from "../actions/actionTypes";

const initialState = {
  token: null,
  userId: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
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
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
