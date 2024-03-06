import{  createBrowserRouter } from"react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import Blog from "../Pages/Blog/Blog";
import BlogDetails from "../Pages/Blog Details/BlogDetails";
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
          
        }
    ]
  },
]);

export default Router;
