
import { Sync } from '@mui/icons-material'
import './App.css'
import CustomizedSwitches from './component/Swicher'
import useDarkSide from './component/useDarcMode'
import Async from './component/Async'
import { Button } from '@mui/material'
import EditModal from './component/editModal'
import React from 'react';

function App({SerachUser}) {

  const [  , toggleTheme] = useDarkSide()
 
  return (
    <div className=" h-[100%] px-4 py-2  rounded dark:bg-gray-800 dark:text-white bg-white text-black">
      
      <div>

    
      <CustomizedSwitches toggleTheme={toggleTheme} />
       <input  onChange={(e)=> SerachUser(e.target.value)}  className='w-[300px] p-[10px] border ' type="text" name="" id="" />
      </div>
      <table className='border-collapse text-center border border-gray-300 dark:border-gray-600 w-full'>
        <thead className='bg-blue-800 text dark:bg-gray-700 text-black dark:text-white'>
            <th className='border border-gray-300 dark:border-gray-600'>ID</th>
            <th className='border border-gray-300 dark:border-gray-600'>Name</th>
            <th className='border border-gray-300 dark:border-gray-600'>Age</th>
            <th className='border border-gray-300 dark:border-gray-600'>Status</th>
            <th className='border border-gray-300 dark:border-gray-600'>Actions</th>
        </thead>

        <tbody className=''>
          <Async/>
        </tbody>
        
      </table>
    </div>
  )
}

export default App
