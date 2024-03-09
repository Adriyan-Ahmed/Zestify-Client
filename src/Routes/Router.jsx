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
          path: "/details/:id",
          element: <BlogDetails></BlogDetails>
          
        },
        {
          path: "/menu",
          element: <Menu></Menu>
        },
        {
          path: "/food/:id",
          element: <Food></Food>
        },
        {
          path: "/add-food",
          element: <AddFood></AddFood>
        }
    ]
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "dashboard/profile",
        element: <Profile></Profile>
      }
    ]
  }
]);

export default Router;
