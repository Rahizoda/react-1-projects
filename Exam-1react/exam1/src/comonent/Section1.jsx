import React from 'react';
import Button from './Button';

const Section1 = ({img2}) => {
  return (
    <>
          <div className=' flex justify-around items-center '>
              <div className='p-[10px]'>
              <h1 className='text-[50px]' >For Your Pet’s <br /> Natural Life <br /> & Care</h1> <br />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br />sed do eiusmod tempor incididunt</p><br />
              <div className=' flex justify-center gap-[10px]'>
                  <Button text={'Our Services'} color={'white'} bgcolor={'#FF7852'} width={'150px'} />
                  <Button text={'Make Appointment'} color={'white'} bgcolor={'#8EC637'} width={'210px'} />
              </div>
              </div>
              
             <img className='w-[500px] sm:hidden md:flex ' src={img2} alt="" />

          </div>
    </>
  );
}

export default Section1;
