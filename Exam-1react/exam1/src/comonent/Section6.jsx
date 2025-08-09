import React from 'react'
import Button from './Button'

const Section6 = () => {
  return (
      <>
          
          <div className='flex justify-center p-[100px_50px] gap-[20px] items-center md:flex-row  sm:flex-col'>
              
              <div className='w-[300px] p-[50px_30px] shadow-[0px_0px_10px_gray] rounded-[20px] bg-white text-center ' >
                  <p>Regular Pack</p> <br />
                  <h2 className='text-[25px] font-bold'>3 Days</h2> <br />
                  <p>Pet Shower</p> <br />
                  <p>Fitness Checkup</p> <br />
                  <p>Pet Grooming</p> <br />
                  <p>Hair and Nail Cut</p> <br />
                  <p>Control Hair Falling</p> <br />
                  <p className='text-[25px] text-orange-500 '>$150 <span className='text-[10px]'>Per Visit</span></p> <br />
                  <Button text={'Purchase Pack'} color={'white'} bgcolor={'#FF7852'} width={'200px'} />
              </div>
              <div className='w-[300px] p-[50px_30px] shadow-[0px_0px_10px_gray] rounded-[20px] bg-[#FF6439] text-white text-center ' >
                  <p>Regular Pack</p> <br />
                  <h2 className='text-[25px] font-bold'>10 Days</h2> <br />
                  <p>Pet Shower</p> <br />
                  <p>Fitness Checkup</p> <br />
                  <p>Pet Grooming</p> <br />
                  <p>Hair and Nail Cut</p> <br />
                  <p>Control Hair Falling</p> <br />
                  <p>Pet Park And Games</p> <br />
                  <p>Control Hair Falling</p> <br />
                  <p className='text-[25px] text-orange-500 '>$350 <span className='text-[10px]'>Per Visit</span></p> <br />
                  <Button text={'Purchase Pack'} color={'orange'} bgcolor={'white'} width={'200px'} />
              </div>
              <div className='w-[300px] p-[50px_30px] shadow-[0px_0px_10px_gray] rounded-[20px] bg-white text-center ' >
                  <p>Regular Pack</p> <br />
                  <h2 className='text-[25px] font-bold'>30 Days</h2> <br />
                  <p>Pet Shower</p> <br />
                  <p>Fitness Checkup</p> <br />
                  <p>Pet Grooming</p> <br />
                  <p>Hair and Nail Cut</p> <br />
                  <p>Control Hair Falling</p> <br />
                  <p className='text-[25px] text-orange-500 '>$550 <span className='text-[10px]'>Per Visit</span></p> <br />
                  <Button text={'Purchase Pack'} color={'white'} bgcolor={'#FF7852'} width={'200px'} />
              </div>
          </div>
      
    </>
  )
}

export default Section6
