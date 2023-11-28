
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Root from "../Root/Root";
import Register from "../Shared/Register/Register";
import Login from "../Shared/Login/Login";
import PrivateRoute from "./PrivateRoute";
import AvailableCamps from "../Pages/Home/Home/AvailableCamps/AvailableCamps";
import Camp from "../Pages/Camp/Camp";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Dashboard from "../Layout/Dashboard";
import RegisteredCamps from "../Pages/Dashboard/registeredCamps/RegisteredCamps";
import Profile from "../Pages/Dashboard/Profile/Profile";
import AllUser from "../Pages/Dashboard/ManageCamps/AllUser";
import ManageCamps from "../Pages/Dashboard/ManageCamps/ManageCamps";
import AddCamp from "../Pages/Dashboard/ManageCamps/AddCamp";
import AllSigninUser from "../Pages/Dashboard/ManageCamps/AllSigninUser";
import Payment from "../Pages/Dashboard/Payment/Payment";

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
          path:'participant-profile',
          element:<Profile></Profile>
        },
        {
          path:'manage-registered-camps',
          element:<AllUser></AllUser>
        },
        {
          path:'registered-camps',
          element:<RegisteredCamps></RegisteredCamps>
        },
        {
          path:'manage-camps',
          element:<ManageCamps></ManageCamps>
        },
        {
          path:'add-a-camp',
          element:<AddCamp></AddCamp>
        },
        {
          path:'All-Signin-User',
          element:<AllSigninUser></AllSigninUser>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        }
      ]
    }
  ]);
  export default router