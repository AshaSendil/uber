

import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./routes/protected-routes";
import { protectedRoutes, publicRoutes } from "./routes/routes";
import Layout from "./components/layout";
import NoAccess from "./pages/access-rights/no-access";
import { accessRights } from "./config/apps";

const App = () => {
  return (
    <Routes>

      <Route path="/" element={<Layout><ProtectedRoutes /></Layout>}>
        {protectedRoutes.map((route) => {
          console.log("route.component===", route);
          if(route.access === true){
            if(accessRights[route.id] && accessRights[route.id] === true){
              return <Route path={route.path} element={route.component} />;
            }else{
              return <Route path={route.path} element={<NoAccess />} />;
            }
          }
          return <Route path={route.path} element={route.component} />;
        })}
      </Route>
    </Routes>
  );
};

export default App;



