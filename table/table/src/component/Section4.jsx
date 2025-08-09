import React from 'react';
import Button from './Button';

const Section4 = ( {img8 , img9 ,img10 , img11 , img12 }) => {

    let data = [
        {
            id: 1,
            title: 'Demo',
            info: '30 документів',
            price: '0, грн/місяць',
            text:'Зарегистрироваться'
        },
        {
            id: '2',
            title: 'Business',
            info: '1 000 документів',
            price: '1000, грн/місяць',
            text:'Закакзать'
            
        },
        {
            id: '3',
            title: 'Pro',
            info: '10 000 документів',
            price: '9 000, грн/місяць',
            text:'Заказать'
            
        },
        {
            id: '4',
            title: 'Individual',
            info: 'Необмежена кількість документів',
            price:'90 000, грн/місяць',
            text:'Связаться с нами'

        }
    ]


  return (
      <>
          <div>
              <h1 className='  text-center text-[30px] p-[100px_0px] sm:flex-col' >Пакеты цифровых подписей </h1>
              <div className='flex sm:flex-col sm:justify-center sm:items-center p-[50px_0px] md:justify-center gap-[30px] md:flex-row '>
                  {
                      data.map((item) => {
                        return (
                            <div key={item.id} className='flex bg-[#DEEEFC] sm:w-[80%] md:w-[250px] flex-col items-center justify-center p-[30px_20px] rounded-lg shadow-lg'>
                                <h2 className='text-xl font-bold'>{item.title}</h2> <br />
                                <p className='text-gray-600'>{item.info}</p><br />
                                <p className='text-lg font-semibold'>{item.price}</p> <br />
                                <Button color={'blue'} text={item.text} width={'200px'} rounded={'20px'} colortxt={'white'}  /> 
                            </div>
                        )
                      })
                  }
              </div>
              
              <div className='text-center p-[100px_0px] bg-[#D8F1F0] '>
                  <h1 className='sm:text-[25px] md:text-[60px]'>5 820 125 114 </h1> <br />
                  <h2 className='sm:text-[20px] md:text-[35px] '>подписано документов</h2> <br />
                  <p>Наша компания уже более 30 лет создает удобные <br />
                      решения для бизнеса любого размера. Мы гордимся <br />
                      Signy как безопасным и комфортным продуктом</p>
              </div>


              <h1 className='text-[30px] p-[50px_0px] text-center    '>Друзья Signy</h1>
              
                  <div className='flex md:flex-row sm:flex-wrap justify-center gap-[80px] items-center  pb-[50px]'>
                      <img className='w-[150px] ' src={img8} alt="" />
                      <img className='w-[150px] '  src={img9} alt="" />
                      <img className='w-[150px] '  src={img10} alt="" />
                      <img className='w-[150px] '  src={img11} alt="" />
                  </div>
                      <img className='m-auto pb-[50px]' src={img12} alt="" />
             
          </div>
      
    </>
  );
}

export default Section4;
