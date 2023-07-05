import CryptoJS from "crypto-js";
import axios from "axios";

export const isUserLoggedIn = () => {
  const token = sessionStorage.getItem("accessToken");
  // console.log('token', token);
  if (token) {
    // const decryptedData = decryptData(token);
    // console.log("decryptedData====", decryptedData);
    if (token) {
      return true;
    } else {
      return false;
    }
  }
};

export const encryptData = (data) => {
  return CryptoJS.AES.encrypt(
    data,
    process.env.REACT_APP_SECRET_KEY
  ).toString();
};

export const decryptData = (cipherText) => {
  const bytes = CryptoJS.AES.decrypt(
    cipherText,
    process.env.REACT_APP_SECRET_KEY
  );
  const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedData;
};

export const setToken = () => {
  const tokenValue = sessionStorage.getItem("accessToken");
  const decryptedData = decryptData(tokenValue);
  console.log(decryptedData, "decryptedDatadecryptedData");
  const auth = "Authorization";
  axios.defaults.headers.common = { Authorization: `Bearer ${decryptedData}` };
  const config = { headers: { Authorization: "Bearer" + decryptedData } };
  return config;
  // ["Authentication"] = "Bearer" + tokenValue;
};
export const setConfig = async () => {
  if (sessionStorage.getItem("token")) {
    const config = await setToken();
    return config;
  } else {
    return null;
  }
};