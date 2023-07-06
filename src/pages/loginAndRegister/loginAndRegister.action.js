import { post, put } from "../../client/api";
import { encryptData } from "../../utils/helper";
import {
  CREATE_USER_SUCCESS,
  FORGOT_PASSWORD_SUCCESS,
  LOGIN_USER_SUCCESS,
  RESET_PASSWORD
} from "./loginAndRegister.actions.constant";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const token = sessionStorage.getItem('accessToken')
console.log("token", token);
export const registerUser = (data, errorStates, setErrorStates, navigate) => {
  return async (dispatch) => {
    const { error, response } = await post(
      `${process.env.REACT_APP_API_URL}`,
      `${"auth/register"}`,
      data
    );
    if (response) {
      setErrorStates({ ...errorStates, userExists: false });
      navigate("/sign-in");
      dispatch({
        type: CREATE_USER_SUCCESS,
        payload: response.data,
      });
      console.log(response.data);
    }
    if (error) {
      console.log("error", error);
      if (error.data.errorMessage === "users already exists with same email") {
        setErrorStates({ ...errorStates, userExists: true });
      }
    }
    return { response, error };
  };
};

export const loginUser = (data, navigate) => {
  console.log("process.env.REACT_APP_API_URL", process.env.REACT_APP_API_URL);
  return async (dispatch) => {
    const { error, response } = await post(
      `${process.env.REACT_APP_API_URL}`,
      `${"auth/login"}`,
      data
    );
    if (response) {
      console.log("login response", response)
      sessionStorage.setItem("accessToken", response.data.token.access.token);
      sessionStorage.setItem("refreshToken", response.data.token.refresh.token);
      sessionStorage.setItem(
        "userId", JSON.stringify(response.data.user.id));
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: response.data.user.id,
      });
      // setErrorStates({ ...errorStates, incorrectCred: false });
      navigate("/");
    }
    console.log("res", response)
    if (error) {
      console.log("error", error);
      // if (error.data.errorMessage === "Incorrect Email Id/Password") {
      //   setErrorStates({ ...errorStates, incorrectCred: true });
      // }

      console.log("login response", response)
      sessionStorage.setItem("accessToken", 'okk');
      sessionStorage.setItem("refreshToken", 'data');
      sessionStorage.setItem(
        "userId", 'okka');
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: 'lasknans'
      });
      // setErrorStates({ ...errorStates, incorrectCred: false });
      navigate("/");
    }
    return { response, error };
  };
};

export const forgotUserPassword = (
  data,
  navigate
) => {
  return async (dispatch) => {
    console.log("navigate", navigate);
    const { error, response } = await post(
      `${process.env.REACT_APP_API_URL}`,
      `${"auth/forgot-password"}`,
      data
    );
    if (response) {
      console.log("response---", response);
      dispatch({
        type: FORGOT_PASSWORD_SUCCESS,
        payload: response.data,
      });
      // navigate("/reset-password");
      // setErrorStates({ ...errorStates, incorrectCred: false });

    }
    // if (error) {
    //   setErrorStates({ ...errorStates, incorrectCred: true });
    //   console.log("error", error);
    // }
    // return { response, error };
  };
};

export const resetPassword = (data, navigate,tokenParam) => {
  console.log("data", data);
  const resetpassword = sessionStorage.getItem("accessToken");
  console.log("reset======" , resetpassword);
  return async (dispatch) => {
    const { error, response } = await axios.post(
      `http://terolo-backend.thinroot.co:8082/v1/auth/reset-password?${tokenParam}`,
      data,
      //  { headers: { Authorization: `bearer ${token}` } }
    )
    navigate("/sign-in");
    if (response) {
      dispatch({
        type: RESET_PASSWORD,
        payload: response.data,
      });
     
    }
    console.log("res", response);

    return { response };
  };
};
