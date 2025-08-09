import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/Layout";
import Users from "./pages/Users";
import UserByid from "./pages/UserByid";
import "./App.css";


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Users />} />
        <Route path="users/:id" element={<UserByid />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
