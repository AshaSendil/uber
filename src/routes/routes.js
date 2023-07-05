import Dashboard from '../pages/home/dashboard';
import Home from '../pages/home';
import Map from '../pages/home/dashboard/map';


const protectedRoutes = [
  {
    path: '/',
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




export {
  protectedRoutes,
};