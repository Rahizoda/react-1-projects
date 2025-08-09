import React from 'react';
import Button from './Button';

const Nav = ({img1}) => {
  return (
    <>
          <div className=' flex justify-around items-center p-[20px]' >
              <img src={img1} alt="" />
              <div className=' flex  gap-[30px] items-center sm:hidden md:flex'>
                  <p>Start</p>
                  <p>Services</p>
                  <p>About</p>
                  <p>News</p>
                  <p>Contact</p>
              </div>
              <Button text={'384-129-293-39'} color={'white'} bgcolor={'#FF7852'} width={'150px'} />
      </div>
    </>
  );
}

export default Nav;
