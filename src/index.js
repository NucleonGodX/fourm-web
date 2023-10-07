import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignUp from './pages/auth/SignUp';
import Layout from './components/Layout';
import ForumPage from './pages/forumPage';
import SignIn from './pages/auth/SignIn';



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
    path: "/SignIn",
    element: <SignIn/>,
  },
  {
    path:"/SignUp",
    element:<SignUp/>
  },
  {
  path:"/forumpage",
  element:<ForumPage/>  }
  ]}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router}/>

);


