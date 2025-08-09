import React from 'react';

const Section2 = ({img4 , img5 , img6}) => {
  return (
      <>
          <div className='flex sm:flex-col md:flex-row justify-around items-center p-[50px_0px] sm:mt-[30px] md:mt-[0px]  gap-[20px] ' >
              <div className='flex justify-center gap-[15px] items-start ' >
                  <img className='w-[50px] h-[50px]'  src={img4} alt="" />
                  <div>
                      <h2 className='font-bold' >Моментально</h2>
                      <p>Никаких задержек. <br className='sm:hidden md:block ' />1 секунда на  <br />подписание</p>
                  </div>
              </div>

              <div className='flex justify-center gap-[15px] items-start ' >
                  <img className='w-[50px] h-[50px]' src={img5} alt="" />
                  <div>
                      <h2 className='font-bold' >Глобально</h2>
                      <p>Сервис доступен <br className='sm:hidden md:block ' /> 24\7 со всех <br /> устройств.</p>
                  </div>
              </div>

              <div className='flex justify-center items-start gap-[15px] ' >
                  <img className='w-[50px] h-[50px]' src={img6} alt="" />
                  <div>
                      <h2 className='font-bold' >Экономно</h2>
                      <p>В 30 раз дешевле <br className='sm:hidden md:block '  /> чем почта и <br /> курьеры</p>
                  </div>
              </div>
          </div>
      
    </>
  );
}

export default Section2;
