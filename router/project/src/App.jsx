import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Components from './Pages/Components';
import Users from './Pages/Users';
import User from './Pages/User';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true, 
          element:<Home/>
        }, 
        {
          path: 'about',
          element:<About/>
        }, 
        {
          path: 'component',
          element:<Components/>
        }, 
        {
          path: 'users',
          element:<Users/>
        }, {
          path: 'user/:id',
          element:<User/>
        }
      ]
    }
  ])

  return  <RouterProvider router={router} />
}

export default App;
