import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import Products from "../Pages/Products/Products";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:
    children: [
      { path: "/", element: <Home></Home> },
      { path: "login", element: <LogIn></LogIn> },
      { path: "sign-up", element: <SignUp></SignUp> },
      {
        path: "products",
        element: (
          <PrivateRoute>
            <Products></Products>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
