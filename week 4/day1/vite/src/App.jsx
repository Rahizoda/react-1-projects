import React from 'react';
import Async from './components/Async';
import "./App.css"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import UserbyId from './components/UserbyId';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}  >
        <Route path='user/:id' element={<UserbyId/>} />
      </Route>
    )
  )
  return (
     <RouterProvider router={router} />
  );
}

export default App;
