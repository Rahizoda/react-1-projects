import React from 'react'
import Button from './Button'

const Section1 = ({img3}) => {
  return (
    <>
          <div>
              
              <div className='md:p-[100px] sm:p-[30px] '>
                  <h1 className='md:text-[35px] sm:text-[19px] font-bold'>Цифровой документооборот в <br /> три этапа:</h1> <br />
                  <p> 1 - 2 - 3</p><br />
                  <h2 className='font-bold'>Быстрая регистрация</h2> <br />
                  <p>Мы создали, возможно, самую простую регистрацию <br className='sm:hidden md:block ' />
                   Регистрируйся, получай полный доступ к сервису и <br />
                      1000 подписей документов в подарок!</p><br />
                  <Button colortxt={'white'} color={'blue'} width={'300px' } rounded={'20px'} text={'Попробовать Бесплатно'} />
              </div>
            <img className='absolute md:top-0 z-[-1] md:h-[100vh] sm:h-[60vh] sm:top-[80px]  md:w-[100%] ' src={img3} alt="" />

      </div>
    </>
  )
}

export default Section1
