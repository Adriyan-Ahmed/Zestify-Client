import{  createBrowserRouter } from"react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import Blog from "../Pages/Blog/Blog";
import BlogDetails from "../Pages/Blog Details/BlogDetails";
import Menu from "../Pages/Menu/Menu";
import Food from "../Pages/Food/Food";
import AddFood from "../Pages/Add Food/AddFood";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import Profile from "../Pages/Profile/Profile";
import Protection from "../Provider/Protection";
import Cart from "../Pages/Cart/Cart";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
          path: "/blogs",
          element: <Blog></Blog>
        },
        {
          path: "blogs/details/:id",
          element: <Protection><BlogDetails></BlogDetails></Protection>
          
        },
        {
          path: "/menu",
          element: <Menu></Menu>
        },
        {
          path: "/food/:id",
          element: <Protection><Food></Food></Protection>
        },
    ]
  },
  {
    path: "dashboard",
    element: <Protection><Dashboard></Dashboard></Protection>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "profile",
        element: <Protection><Profile></Profile></Protection>
      },
      {
        path: "cart",
        element: <Protection><Cart></Cart></Protection>
      },
      {
        path: "add-food",
        element: <Protection><AddFood></AddFood></Protection>
      }
    ]
  }
]);

export default Router;
