import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Layout/Main/Main.jsx';
import DashBoard from './Component/Dashboard/DashBoard.jsx';
import Defaultpage from './Component/Dashboard/Default-page/Defaultpage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: '/',
        element: <Defaultpage></Defaultpage>,
        loader: ()=> fetch("cart.json")

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>,
)
