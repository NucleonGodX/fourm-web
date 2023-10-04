import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/Sign-up';
import Layout from './components/Layout';



const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path:"/Sign-up",
    element:<SignUp/>
  }]}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router}/>

);


