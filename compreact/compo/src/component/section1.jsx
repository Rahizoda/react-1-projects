


const Section1 = ({img1  , img2}) => {
  return (
    <>
      <div className=' bg-black text-center p-[100px_0px] text-white '>
        <h3>Home  <span className='text-amber-600'>Contact us</span></h3> <br />
        <h1 className='text-[35px]'>Lorem Ipsum is simply dummy text of the printing and.</h1> <br />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <img className="w-[900px] mt-[100px] m-auto " src={img2} alt="" />

        
        <div className="flex justify-center gap-[30px] items-center text-start mt-[100px]">

          <div >
            <h3 className="ml-[15px] mb-[10px]">Follow us</h3>
            <img src={img1}  alt="" />
          </div>
            <hr />
          <div > 
            <h2>📞  +94 4444 5555 6</h2>
          </div>
          <hr />
          <div>
            <h3>  but also the leap into electronic  <br />typesetting</h3>
          </div>
        </div>
       </div>
    </>
  )
}

export default Section1
