import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <div className="flex h-screen justify-center items-center"><p className="text-6xl font-bold">404 Error!</p></div>
    }
])