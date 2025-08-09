import React from 'react'

const Section5 = ({img8 , img9 , img10 , img11 }) => {
    const  data = [
        {
            id: 1, 
            name: 'Rosalina Wiliam', 
            title: 'CEO & Founder',
            img:img8
        },
          {
            id: 2, 
            name: 'Rosalina Wiliam', 
              title: 'CEO & Founder',
            img:img9
        },
            {
            id: 3, 
            name: 'Rosalina Wiliam', 
                title: 'CEO & Founder',
            img:img10
        },
              {
            id: 4, 
            name: 'Rosalina Wiliam', 
            title: 'CEO & Founder',
            img:img11
        },
    ]
    return (
      
        <>
            
      
          <div className='bg-[#FFECE4] p-[100px_0px] text-center'>
              <p className='text-orange-500'>Our Team</p> <br />
                <h1 className='text-[35px] font-bold '>Meet Our Groomers </h1> <br /><br /><br /><br />
                
                <div className='flex md:flex-row sm:flex-wrap justify-center gap-[30px]'>
                    {
                        data.map((item) => {
                            return (
                            <div key={item.id} className='p-[40px_10px] bg-white rounded-[100px] flex flex-col justify-center items-center w-[250px] h-[450px]'>
                                <img src={item.img} alt="" />
                                <h2 className='font-bold text-[23px] '>{item.name}</h2> <br />
                                <p className='text-[#FF7751] '>{item.title }</p>
                                </div>
                            )
                        })
                    }
                </div>

              {/* <div className='flex md:flex-row sm:flex-wrap justify-center gap-[30px] '>
                  
              <div className='p-[40px_10px] bg-white rounded-[100px] flex flex-col justify-center items-center w-[250px] h-[450px] '>
                  <img src={img8} alt="" /> <br />
                  <h2 className='font-bold text-[23px] '>Rosalina Wiliam</h2> <br />
                  <p className='text-[#FF7751] '>CEO & Founder</p>
              </div>
              <div className='p-[40px_10px] bg-white rounded-[100px] flex flex-col justify-center items-center w-[250px] h-[450px] '>
                  <img src={img9} alt="" /> <br />
                  <h2 className='font-bold text-[23px] '>Rosalina Wiliam</h2> <br />
                  <p className='text-[#FF7751] '>CEO & Founder</p>
              </div>
              <div className='p-[40px_10px] bg-white rounded-[100px] flex flex-col justify-center items-center w-[250px] h-[450px] '>
                  <img src={img10} alt="" /> <br />
                  <h2 className='font-bold text-[23px] '>Rosalina Wiliam</h2> <br />
                  <p className='text-[#FF7751] '>CEO & Founder</p>
              </div>
              <div className='p-[40px_10px] bg-white rounded-[100px] flex flex-col justify-center items-center w-[250px] h-[450px] '>
                  <img src={img11} alt="" /> <br />
                  <h2 className='font-bold text-[23px] '>Rosalina Wiliam</h2> <br />
                  <p className='text-[#FF7751] '>CEO & Founder</p>
              </div>
              </div> */}
          </div>
    </>
  )
}

export default Section5
