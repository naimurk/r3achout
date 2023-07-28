import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import DashBoard from './Component/Dashboard/DashBoard.jsx';
import Defaultpage from './Component/Dashboard/Default-page/Defaultpage.jsx';
import MyJob from './Component/Dashboard/MyJob/MyJob.jsx';
import DashboardTwo from './Component/Dashboard/DashboardTwo/DashboardTwo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: '/',
        element: <Defaultpage></Defaultpage>,
        loader: ()=> fetch("cart.json")

      },
      {
        path: '/jobs',
        element: <MyJob></MyJob>,
        

      },
      {
        path: '/dashboard',
        element: <DashboardTwo></DashboardTwo>,
        

      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>,
)
