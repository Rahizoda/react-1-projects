import React from 'react';
import Button from './Button';

const Section3 = ({img7}) => {
  return (
    <>
          <div className='flex justify-around md:p-[100px_0px] bg-[#D8F1F0] sm:p-[20px]  ' >
              <div>
                  <h1 className=' sm:text-[25px] md:text-[30px] '>Комфорт в работе</h1> <br />
                  <p> - Создавай документы по твоим личным привычным <br className='md:block sm:hidden ' /> шаблонам. Это индивидуально!</p> <br />
                  <p> - Настраивай порядок подписание документа, если вас  <br className='md:block sm:hidden ' />несколько человек. Это ответственно!</p> <br />
                  <p > - Загружай XML файл с собственным шаблоном готового <br className='md:block sm:hidden ' /> документа. Это удобно!</p> <br />
                  <p> - Работай в супер простом и понятном интерфейсе без <br className='md:block sm:hidden ' /> сложностей. Это приятно!</p><br />
                  <Button text={'Узнать больше'} colortxt={'black'} color={ 'white'} rounded={'20px'} width={'200px'}/> 
              </div>
              <img className='sm:hidden md:block ' src={img7} alt="" />
          </div>
          
           <div className='flex justify-around md:p-[100px_0px] bg-[#D8F1F0] sm:p-[20px]  ' >
              <img className='sm:hidden md:block ' src={img7} alt="" />
              <div>
                  <h1 className=' sm:text-[25px] md:text-[30px] '>Наш продукт это:</h1> <br />
                  <p> - Создавай документы по твоим личным привычным <br className='md:block sm:hidden ' /> шаблонам. Это индивидуально!</p> <br />
                  <p> - Настраивай порядок подписание документа, если вас  <br className='md:block sm:hidden ' />несколько человек. Это ответственно!</p> <br />
                  <p > - Загружай XML файл с собственным шаблоном готового <br className='md:block sm:hidden ' /> документа. Это удобно!</p> <br />
                  <p> - Работай в супер простом и понятном интерфейсе без <br className='md:block sm:hidden ' /> сложностей. Это приятно!</p><br />
                  <Button text={'Узнать больше'} colortxt={'black'} color={ 'white'} rounded={'20px'} width={'200px'}/> 
              </div>
      </div>
    </>
  );
}

export default Section3;
