import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import OrderReview from './Components/OrderReview/OrderReview';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Grandpa from './Components/Grandpa/Grandpa';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('tshirts.json')
      },
      {
        path: 'order',
        element: <OrderReview></OrderReview>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: '/grandpa',
        element: <Grandpa></Grandpa>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
