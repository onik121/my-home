import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Root from './components/Root';
import About from './pages/About';
import Details from './pages/Details';
import Register from './pages/Register';
import AuthProvider from './provider/AuthProvider';
import PrivateRoute from './components/PrivateRoute';
import UpdateProfile from './pages/UpdateProfile';
import { Toaster } from 'react-hot-toast';
import Error from './pages/Error';
import OurClients from './pages/OurClients';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/ourclients',
        element: <PrivateRoute><OurClients></OurClients></PrivateRoute>
      },
      {
        path: '/updateprofile',
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      {
        path: '/property/:id',
        loader: () => fetch('https://onik121.github.io/Assignment-9-data/properties.json'),
        element: <PrivateRoute><Details></Details></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
)
