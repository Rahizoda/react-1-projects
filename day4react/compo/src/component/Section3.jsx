import React from 'react';

const Section3 = ({img2 , color }) => {
  return (
    <div className='flex justify-around items-center mt-[50px] gap-[20px]'>
          <img src={img2} alt="" />
          <div>
         <button style={{backgroundColor:`${color}`}} className='p-[15px_30px] rounded-[5px] ' >John smash</button>
              <span className='ml-[30px]'>5 min</span> <br /><br />
              <h2 className='text-[25px]'>Lorem Ipsum is simply dummy <br /> text dummy  text ? </h2>
          </div>
    </div>
  );
}

export default Section3;
