import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login/Login";
import App from "../App";

const router = createBrowserRouter([
    {
        path:'/',
        element: <App />
    }
])

export default router