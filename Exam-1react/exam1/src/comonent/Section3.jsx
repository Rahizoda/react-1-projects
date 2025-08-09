import React from 'react';

const Section3 = ({img3 , img4 , img5 , img6}) => {
  return (
      <>
          
          <div className='text-center bg-[#FFECE4] p-[50px_0px]'>
              <p>Care For Your Pet</p><br />
              <h1 className='text-[35px]'>What We Do</h1>
              <div className='flex sm:flex-col md:flex-row justify-center gap-[30px] bg-[#FFECE4] p-[100px_50px] '>
                  
                  <div className='w-[300px] rounded-[15px] bg-white text-center p-[20px]'>
                      <img className='m-auto' src={img3} alt="" /><br />
                      <h2 className='font-bold text-[23px]'>Pet Grooming</h2> <br />
                      <p>There are many variatio <br /> of passage of Lorem for <br /> a Ipsum available</p>
                  </div>
                  <div className='w-[300px]  rounded-[15px] bg-[#FF6236] text-white text-center p-[20px]'>
                      <img className='m-auto' src={img4} alt="" /><br />
                      <h2 className='font-bold text-[23px]'>Pet Grooming</h2> <br />
                      <p>There are many variatio <br /> of passage of Lorem for <br /> a Ipsum available</p>
                  </div>
                  <div className='w-[300px] rounded-[15px] bg-white text-center p-[20px]'>
                      <img className='m-auto' src={img5} alt="" /><br />
                      <h2 className='font-bold text-[23px]'>Pet Grooming</h2> <br />
                      <p>There are many variatio <br /> of passage of Lorem for <br /> a Ipsum available</p>
                  </div>
                  <div className='w-[300px] rounded-[15px] bg-white text-center p-[20px]'>
                      <img className='m-auto' src={img6} alt="" /><br />
                      <h2 className='font-bold text-[23px]'>Pet Grooming</h2> <br />
                      <p>There are many variatio <br /> of passage of Lorem for <br /> a Ipsum available</p>
                  </div>
                  
                  
              </div>

          </div>
      
    </>
  );
}

export default Section3;
