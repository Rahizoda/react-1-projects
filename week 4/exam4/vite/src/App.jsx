import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import Async from './components/Async';
import './App.css';
import User from './components/User';

const App = () => {
  const router = createBrowserRouter( 
    createRoutesFromElements(
      <Route path='/'>
        <Route index element={<Async/>} />
        
        <Route path='user/:id' element={<User/>} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  );
}

export default App;
