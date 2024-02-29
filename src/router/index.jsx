import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login/Login";
import Dashboard from "../Pages/Dashboard";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path:'/dashboard',
    element: <Dashboard />
  }
]);

export default router;
