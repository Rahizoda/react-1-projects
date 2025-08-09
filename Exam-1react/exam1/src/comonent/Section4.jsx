import React from 'react'
import Button from './Button'

const Section4 = ({img7}) => {
  return (
      <>
          <div className='flex p-[100px_0px] md:flex-row gap-[50px] sm:flex-col-reverse justify-around items-center'>
              
              <div className='p-[30px]'>
                  <p className='text-orange-400'>Our Success Story</p><br />
                  <h1 className='text-[35px]' >Experience Vet Clinic <br />And Services</h1> <br />
                  <p>Aliquam erat volutpat In id fermentum augue, ut pellentesque  Maecenas <br />
                      at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hakso <br />
                      hendrerit id. In aliquet magna nec lobortis maximus.</p> <br />
                  <p>🐶 Donec commodo scelerisque laoreet nibh hendrerit</p>  <br />
                  <p>🐶 In aliquet magna nec lobortis maximus. Etiam a dolor placerat</p>  <br />
                  <p>🐶 Etiam dolor nec elementum ipsum convall Maecenas</p>  <br />
                  <Button text={'Know More About Us'} width={'200px'} color={'white'} bgcolor={'#FF7852'} />
              </div>
              <img className='w-[500px]' src={img7} alt="" />
          </div>
      
    </>
  )
}

export default Section4
