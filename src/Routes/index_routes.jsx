import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login/Login";
import SignupCard from "../Components/SignUp/SignupCard";
import Dashboard from "../Pages/SignUp/Dashboard";
import App from "../App";

const router = createBrowserRouter([
    
  {
    path: '/',
    element: <App />
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
  },
  {
    path: '/signup',
    element: <SignupCard/>
  }
])

export default router