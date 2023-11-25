
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Root from "../Root/Root";
import Register from "../Shared/Register/Register";
import Login from "../Shared/Login/Login";
import Secreat from "../secreat/Secreat";
import PrivateRoute from "./PrivateRoute";
import AvailableCamps from "../Pages/Home/Home/AvailableCamps/AvailableCamps";
import Camp from "../Pages/Camp/Camp";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Dashboard from "../Layout/Dashboard";
import RegisteredCamps from "../Pages/Dashboard/registeredCamps/registeredCamps";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
            path: 'register',
            element:<Register></Register>
        },
        {
          path: 'login',
          element:<Login></Login>
        },
        {
          path:'secreat',
          element: <PrivateRoute><Secreat></Secreat></PrivateRoute> 
        },
        {
          path:'availablecamps',
          element:<PrivateRoute><AvailableCamps></AvailableCamps></PrivateRoute>
        },
        {
          path:'/camp-details/:id',
          element:<Camp></Camp>,
          loader: ({ params }) => fetch(`http://localhost:5000/availableCamp/${params.id}`)
        },
        {
          path:'contactUs',
          element:<ContactUs></ContactUs>
        }
      ],
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'registered-camps',
          element:<RegisteredCamps></RegisteredCamps>
        }
      ]
    }
  ]);
  export default router