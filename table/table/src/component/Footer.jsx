import React from 'react';
import Button from './Button';

const Footer = ({img16}) => {
  return (
    <>
      
          <div className='text-center p-[50px_0px]'>
              <h1 className='text-[35px]' >Подпишись на наши новости!</h1> <br />
        <p>Введи свой электронный адрес и будь в курсе всех обновлений</p> <br />
        <div className='flex justify-center gap-20px items-center'  >
          <input type="text" className='p-[5px_10px] mr-[20px] w-[30%] border rounded-[20px] ' name="" id="" />
          <Button text={'отправить'} color={'blue'} width={'200px'} rounded={'20px'} colortxt={'white'} />
         </div>
      </div>
      
      <div className='bg-[#061224] flex justify-around items-start  text-white p-[50px_0px]'>

        <div>
          <img src={img16} alt="" />
          <br /><br /><br /><br />
          <p>© 2020 Signy</p>
        </div>

        <div  className='sm:hidden md:block'>
          <h2>Про нас <br />Цены</h2>
          <h2> <br /><br />
            Вход <br />Регистрация
          </h2>
        </div>
        <h2 className=' sm:hidden md:block'>
          Блог  <br />Контакты
        </h2>

        <div className=' sm:hidden md:block'>
          <h2>infosmartsign@smarttender.biz</h2>
          <h2>
            Facebook
          </h2>
        </div>

        <div>
          <h2>пр-т Миколи Бажана, 14 А <br />Київ, 02072</h2> <br />
          <h2>0 800 750643</h2> 
          <h2>+380 44 334 56 43</h2>
          <h2>+380 44 338 86 43 </h2>
        </div>
      </div>
          
    </>
  );
}

export default Footer;
