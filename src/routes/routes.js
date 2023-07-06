import Dashboard from '../pages/home/dashboard';
import Home from '../pages/home';
import Map from '../pages/home/dashboard/map';
import Login from '../pages/loginAndRegister/Login';
import Signup from '../pages/loginAndRegister/Signup'

const protectedRoutes = [
  {
    path: '/home',
    component: <Home />,
    exact: true
  },
  {
    path: '/dashboard',
    component: <Dashboard />,
    exact: true
  },
  {
    path: '/map',
    component: <Map />,
    exact: true
  },
];

const publicRoutes = [
  {
    path: "/sign-in",
    component: <Login />,
    exact: true,
  },
  // {
  //   path: "/forgot-password",
  //   component: <ForgotPassword />,
  //   exact: true,
  // },
  {
    path: "/sign-up",
    component: <Signup/>,
    exact: true,
  },
  // {
  //   path: "/reset-password",
  //   component: <ResetPassword />,
  //   exact: true,
  // }
];


export {
  protectedRoutes,
  publicRoutes
};