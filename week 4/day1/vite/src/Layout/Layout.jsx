import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Async from '../components/Async';

const Layout = () => {
  return (
    <div>
          
      <Async/>
          <Outlet />
          
    </div>
  );
}

export default Layout;
