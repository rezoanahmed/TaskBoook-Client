import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <div className="flex h-screen justify-center items-center"><p className="text-6xl font-bold">404 Error!</p></div>
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    }
])