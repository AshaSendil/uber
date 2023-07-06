

import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./routes/protected-routes";
import { protectedRoutes, publicRoutes } from "./routes/routes";
import Layout from "./components/layout";
import { accessRights } from "./config/apps";
import Login from "./pages/loginAndRegister/Login";
import Home from "./pages/home";

const App = () => {
  return (
    <Routes>

      <Route path='/' element={<Login/>} ></Route>
      <Route path='/home' element={<Home/>}></Route>
     
    </Routes>
  );
};

export default App;



