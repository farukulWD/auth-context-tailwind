import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./Layout/Main";
import Home from "./component/Home";
import Register from "./component/Register";
import Login from "./component/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthProviders from "./providers/AuthProviders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
