import React from 'react';

const Section5 = ({img13 , img14}) => {
  return (
    <>
      
          <div className='bg-[#D8F1F0]' >
              <h1 className='text-[30px] text-center p-[40px_0px] '>Интересно пишем про </h1>
              <div  className=' flex sm:flex-col md:flex-row justify-around items-center gap-[30px] '>
                  
                  <div className='p-[20px]'>
                      <img src={img13} alt="" /> <br />
                      <p>28.05.2020</p> <br />
                      <h2 className='text-[22px]'>Заголовок короткий в <br /> две строки</h2>
                  </div>
                  <div className='p-[20px]'>
                      <img src={img14} alt="" /> <br />
                      <p>28.05.2020</p> <br />
                      <h2 className='text-[22px]' >Заголовок короткий в <br /> две строки</h2>
                  </div>
                   <div className='p-[20px]'>
                      <img src={img13} alt="" /> <br />
                      <p>28.05.2020</p> <br />
                      <h2 className='text-[22px]'>Заголовок короткий в <br /> две строки</h2>
                  </div>
              </div>
          </div>
          
    </>
  );
}

export default Section5;
