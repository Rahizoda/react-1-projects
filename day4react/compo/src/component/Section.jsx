import React from 'react'

const Section = () => {
  return (
      <>
          <div className='bg-black text-white p-[150px_0px] ' >
          <h1 className='text-[30px] ml-[80px] '>Lorem Ipsum</h1><br />
        <p className='ml-[80px] pb-[100px] '>Lorem Ipsum is simply dummy text of the printing and typesetting <br />
          industry. </p>
              
          <div className=" mb-[50px] bg-[#1C140F] shadow-[0px_0px_5px_gray] w-[90%] rounded-[10px] m-auto p-[50px_0px] flex justify-around items-center">

          <div>
            <h2 className="text-[30px]">Stay in the loop</h2><br />
            <p>Subscribe to receive the latest news and updates about TDA. <br />We promise not to spam you! </p>
          </div>

          <div className="p-[20px] rounded-[10px] bg-[white] ">

            <input className="border-[none] w-[300px] text-black p-[10px] mr-[10px]  " type="text" name="" id="" placeholder="Enter email address"/>
            <button className="bg-[#926717] text-white rounded-[5px] p-[10px_25px] ">Continue</button>
          </div>
        </div>
          </div>
      </>
  )
}

export default Section
