import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div >
          <ul style={{display:'flex', gap:'30px'}}>
              <li>
                  <Link to={'/'} >Home</Link>
              </li> 
               <li>
                  <Link to={'/about'} >About</Link>
              </li>
               <li>
                  <Link to={'/component'} >Components</Link>
              </li>
              <li>
                  <Link to={'/users'} >Users</Link>
              </li>
          </ul>
          <Outlet/>
    </div>
  )
}

export default Layout
