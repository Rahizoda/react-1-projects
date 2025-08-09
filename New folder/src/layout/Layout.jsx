import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import top from "../assets/Top Banner.svg"
import contanier from "../assets/Logo Container.svg"
import logo from "../assets/Logo (1).svg"
import btnFuter from "../assets/btnFuter.svg"
import btnFuter2 from "../assets/Buttons Container.svg"

const Layout = () => {



    return (
        <div className='w-[90%] m-auto '>
            <img src={top} alt="" className='w-[100%]' />
            <div className='flex justify-between border-black rounded-[10px] items-center mt-[20px] border h-[50px]'>
                <img src={contanier} alt="" className='w-[150px] h-[150px]' />
                <ul className='flex gap-[30px] m-[0px_40px]'>
                    <li className=' p-[13px_20px]' >
                        <Link to="/"> Home </Link>
                    </li>
                    <li className='  p-[13px_20px]'>
                        <Link to="about"> About </Link>
                    </li>
                    <li className='  p-[13px_20px]'>
                        <Link to="users"> Users </Link>
                    </li>
                </ul>
            </div>
            <Outlet />


            <div className='p-[50px] m-[20px_50px] w-[100%] ml-0  border-black rounded-xl shadow-[5px_10px_black]  border'>
                <div className='flex justify-between'>
                    <div className='w-[34%]'>
                        <img src={logo} alt="" className='w-[150px]' />
                        <h1 className='mt-[20px] '> We believe in the power of play to foster creativity, problem-solving skills, and imagination. </h1>
                        <img src={btnFuter} alt="" className='mt-[24px]' />
                        <img src={btnFuter} alt="" className='mt-[14px]' />
                        <img src={btnFuter} alt="" className='mt-[14px]' />
                    </div>
                    <div className='w-[13%]'>
                        <h1 className=''>Home</h1>
                        <h1 className='mt-[25px]'>Features</h1>
                        <h1 className='mt-[25px]'>Our Testimonials</h1>
                        <h1 className='mt-[25px]'>FAQ</h1>
                    </div>
                    <div className='w-[18%]'>
                        <h1 className=''>About Us</h1>
                        <h1 className='mt-[25px]'>Our Mission</h1>
                        <h1 className='mt-[25px]'>Our and Ьышвыф</h1>
                        <h1 className='mt-[25px]'>FAQ</h1>
                        <h1 className='mt-[25px]'>History</h1>
                    </div>
                    <div className='w-[13%]'>
                        <h1 className=''>Home</h1>
                        <h1 className='mt-[25px]'>Features</h1>
                        <h1 className='mt-[25px]'>FAQ</h1>
                    </div>
                    <div className='w-[13%]'>
                        <h1 className=''>Home</h1>
                        <h1 className='mt-[25px]'>Features</h1>
                        <h1 className='mt-[25px]'>FAQ</h1>
                    </div>
                </div>
                <hr className='mt-[30px] mb-[20px]' />
                <div className='flex items-center justify-between'>
                    <div className='w-[35%] flex items-center gap-[20px]'>
                        <h1>Terms of Service</h1>
                        <h1>Terms of Service</h1>
                        <h1>Terms of Service</h1>
                    </div>
                    <img src={btnFuter2} alt="" className='w-[120px]' />
                </div>
                <hr className='mt-[30px] mb-[20px]' />
                <h1 className='text-center'> Copyright © [2023] Little Learners Academy. All rights reserved. </h1>
            </div>

        </div>
    )
}

export default Layout