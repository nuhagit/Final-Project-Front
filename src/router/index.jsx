import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "../Components/Login/Login";
import Dashboard from "../Pages/Dashboard";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path:'/dashboard',
    element: <Dashboard />,
    loader: () => {
        if(!localStorage.getItem('token')) {
           return redirect('/')
        } else {
            return null
        }
    }
  }
]);

export default router;
