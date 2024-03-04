import * as React from "react";
import {createBrowserRouter,} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Turf from "./components/Turf";
import Register from "./components/Register";
import MyBooking from "./userView/MyBooking";
import Book from "./components/Book";
import AllBooking from "./admin/AllBooking";
import Ground from "./admin/Ground";
import GroundTable from "./admin/GroundTable";
import Displayallusers from "./components/Displayallusers";
import Error404 from "./components/Error404";
import AdminLogin from "./admin/AdminLogin";
import TurfBooking from "./components/TurfBooking";
import AdminRegistration from "./admin/AdminRegistration";
import HomeAdmin from "./admin/HomeAdmin";


const router = createBrowserRouter([
    {
        path:"/",
        
        children:[
          {
            path:"/",
            element:<Home />
          },
          {
            path:"/about",
            element:<About />
          },
          {
            path:"/services",
            element:<Service />
          },
          {
            path:"/contact",
            element:<Contact />
          },
          {
            path:"/login",
            element:<Login />
          },
          {
            path:"/register",
            element:<Register />
          },
          {
            path:"/myBooking",
            element:<MyBooking />
          },
          {
            path:"/book",
            element:<Book />
          },
          {
            path:"/allBooking",
            element:<AllBooking />
          },
          {
            path:"/ground",
            element:<Ground />
          },
          {
            path:"/groundTable",
            element:<GroundTable />
          },
          {
            path:"/displayAllUser",
            element:<Displayallusers />
          },
          {
            path:"/*",
            element:<Error404 />
          },
          {
            path:"/adminLogin",
            element:<AdminLogin />
          },
          {
            path:"/turf",
            element:<Turf/>
          },
          {
            path:"/turfBooking",
            element:<TurfBooking/>
          },
          {
            path:"/adminRegistration",
            element:<AdminRegistration/>
          },
          {
            path:"/homeadmin",
            element:<HomeAdmin/>
          }  
        ]
    }
]);
export default router;