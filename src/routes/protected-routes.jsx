import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import Home from "../pages/home";
import { isUserLoggedIn } from "../utils/helper";

const ProtectedRoutes = (props) => {
  const auth = isUserLoggedIn();

  return auth ? <Outlet /> : <Navigate to="/sign-in" />
};

export default ProtectedRoutes;  