import React from 'react';

const Section6 = ({img15}) => {
  return (
      <>
          <div className='p-[50px_0px] text-center '>
              <h1 className='text-center text-[30px]'>Познакомимся в живую? </h1>
              <img className='m-auto mt-[40px]' src={img15} alt="" />
          </div>

          <div className='bg-[#DEEEFC] flex flex-col justify-center items-center p-[50px_0px]  ' >
              <div>
              <h1 className='text-[30px]'>Популярные вопросы и <br className='sm:block md:hidden' /> ответы на них</h1> <br />
              <p>+ Почему круглую пиццу ставят в квадратную коробку, а <br className='sm:hidden md:block' /> нарезают треугольниками?</p> <br />
              <p>- Почему после ремонта дорога опять проваливается? <br />
                 - Потому что делают ее без соблюдения технологических <br /> процессов.
              </p> <br />
              <p>+ Почему вода мокрая?</p> <br />
              <p>+ Видят ли микробы друг друга?</p> <br />
              <p>+ Почему кровь красная а вены синие?</p> <br />
              <p>+ Из чего сделана радуга? </p>
             </div>

          </div>
      
    </>
  );
}

export default Section6;
