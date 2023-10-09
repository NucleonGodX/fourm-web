import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Data from './data';
import About from './pages/About';
import SignUp from './pages/auth/SignUp';
import Layout from './components/Layout';
import ForumPage from './pages/forumPage';
import SignIn from './pages/auth/SignIn';
import UserPage from './pages/UserPage';

import { useState } from 'react';

function App() {
  const [isAuthenticated,setIsAuthenticated]=useState(false)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout isAuthenticated={isAuthenticated}/>,
      children: [
        {
          path: "/",
          element: <Data isAuthenticated={isAuthenticated}/>
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/SignIn",
          element: <SignIn />,
        },
        {
          path: "/SignUp",
          element: <SignUp setIsAuthenticated={setIsAuthenticated}/>
        },
        {
          path: "/forumpage",
          element: <ForumPage />
        },
        {
          path:'/user',
          element:<UserPage setIsAuthenticated={setIsAuthenticated}/>
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
