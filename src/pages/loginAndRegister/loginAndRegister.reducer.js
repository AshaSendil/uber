import {
  CREATE_USER_SUCCESS,
  FORGOT_PASSWORD_SUCCESS,
  LOGIN_USER_SUCCESS,
  RESET_PASSWORD
} from "./loginAndRegister.actions.constant";

const initialState = {
  userRegisterData: null,
  loginResult: {},
  forgotDetails: null,
  resetPassword: null
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        loginResult: action.payload,
      };
    }

    case CREATE_USER_SUCCESS: {
      return {
        ...state,
        userRegisterData: action.payload,
      };
    }

    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        forgotDetails: action.payload,
      };
    }
    case RESET_PASSWORD: {
      return {
        ...state,
        resetPassword: action.payload,
      };
    }
    default:
      return state;
  }
}
