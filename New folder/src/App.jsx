import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import useDarkSide from "./config/useDarkMode";
import { useEffect, useState } from "react";
import { Route } from "react-router-dom";


import PageHome from "./pages/PageHome";
import PageAbout from "./pages/PageAbout";
import { RouterProvider } from "react-router";
import Layout from "./layout/layout";

import { Switch } from "@/components/ui/switch"
import Todolist from "./pages/Todolist";
import Info from "./pages/info";

const App = () => {
  const [theme, toggleTheme] = useDarkSide();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} >
        <Route index element={<PageHome />} />
        <Route path="about" element={<PageAbout />} />
        <Route path="users" element={<Todolist />} />
        <Route path="todolist/:id" element={<Info />} />
      </Route>
    )
  )

  return (
    <div className="w-[90%] m-auto">
        <Switch onClick={toggleTheme} />
        <RouterProvider router={router} />
    </div>
  )
}

export default App