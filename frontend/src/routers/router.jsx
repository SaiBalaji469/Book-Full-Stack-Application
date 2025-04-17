import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Banner from "../pages/home/Banner";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/home/CartPage";
import CheckoutPage from "../pages/home/CheckoutPage";
import SingleBook from "../pages/home/SingleBook";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/home/OrderPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashBoardLayout from "../pages/dashboard/DashBoardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import ManageBooks from "../pages/dashboard/manageBooks/ManageBooks";
import AddBook from "../pages/dashboard/addBook/AddBook";
import UpdateBook from "../pages/dashboard/editBook/UpdateBook";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path: "/",
            element: <Home />
        },
        {
            path : "/orders",
            element : <PrivateRoute><OrderPage/></PrivateRoute>,
        },
        {
            path: "/about",
            element: <h1>About</h1>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/register",
            element: <Register />
        },
        {
          path:"/cart",
          element : <CartPage />
        },
        {
          path: "/checkout",
          element: <PrivateRoute><CheckoutPage /></PrivateRoute>
        },
        {
          path: "/books/:id",
          element: <SingleBook />
        }
      ]
    },
    {
      path: "/admin",
      element:<AdminLogin/>
    },
    {
      path:"/dashboard",
      element:<AdminRoute>
        <DashBoardLayout />
      </AdminRoute>,
      children:[
        {
          path:"",
          element: <AdminRoute><Dashboard /></AdminRoute>
        },
        {
          path:"add-new-book",
          element: <AdminRoute><AddBook /></AdminRoute>
        },
        {
          path:"edit-book/:id",
          element: <AdminRoute><UpdateBook /></AdminRoute>
        },
        {
          path:"manage-books",
          element: <AdminRoute><ManageBooks/></AdminRoute>
        }
      ]
    }
  ]);

  export default router;