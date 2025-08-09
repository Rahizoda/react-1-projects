import React from 'react'
import Button from './Button'

const Footer = ({img12 , img13}) => {
  return (
    <>
      
          <div className='flex md:flex-row justify-center gap-[40px] p-[30px] w-[90%] rounded-[20px] m-auto bg-[#FFECE4] items-center sm:flex-col '>
              <div>
                  <h1 className='text-[35px] font-bold'>Professional Pet Care</h1> <br />
                  <p>Pet owners trust us to look after the needs of their beloved companions. <br />
                      We are specialists committed to delivering the very highest of veterinary <br />
                      care and affection.</p> <br />
                  <Button color={'white'} width={'200px'} bgcolor={'#FF7852'} text={'Contact Us Now'} />
              </div>
              <img src={img12} alt="" />
          </div>

          <div className='flex md:flex-row sm:flex-col justify-around   md:items-start p-[100px_0px] gap-[20px]'>
              
              <div className='p-[20px]'>
                  <img src={img13} alt="" /> <br />
                  <p>Quisque id leo non dolor tempor elementum <br />
                      quis ac urna. Nam pharetra, ligula eget finibus <br />
                      dignissim, turpis ipsum sollicitudin</p> <br />
                  <div className='flex justify-center items-center gap-[10px] shadow-[0px_0px_5px_gray] rounded-[30px]'>
                      <input className='border-none w-[200px] ' placeholder='Email address' type="text" name="" id="" />
                      <Button text={'Subscribe'} color={'white'} bgcolor={'#FF7852'} width={'150px'} />
                  </div>

              </div>

              <div className='p-[20px] sm:hidden md:block' >
                  <h2 className='font-bold text-[20px]'>Address</h2> <br />
                  <p>+23 384 485 29</p> <br />
                  <p>vet@shamim.com</p> <br />
                  <p>123 king street, Melbrown</p> <br />
                  <p>Victoria 3000, Australia</p>
              </div>

              <div className='p-[20px] sm:hidden md:block'>
                  <h2 className='text-[20px] font-bold '>Links</h2><br />
                  <p>About Us</p><br />
                  <p>Groomers</p> <br />
                  <p>Contact Us</p><br />
                  <p>Privacy Policy</p> <br />
                  <p>Tearms</p>
              </div>

              <div className='p-[20px] sm:text-center md:text-start'>
                  
                  <h2 className='text-[20px] font-bold'>Opening Hours</h2> <br />
                  <p>Monday-Tuesday 09:00-18:00</p> <br />
                  <p>Wednesday 09:00-18:00</p> <br />
                  <p>Thrusday-Friday 09:00-18:00</p> <br />
                  <p>Saturday 10:00-17:00</p> <br />
                  <p>Sunday 10:30-16:00</p> <br />
              </div>
              
          </div>
          <p className='text-center p-[20px_0px]'>© Copyright 2021 - 2024 | Pet Theme by Md Shamim Hossain | All Rights Reserved</p>
    </>
  )
}

export default Footer
