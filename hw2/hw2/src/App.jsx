
import './App.css'

import img22 from './assets/Group 12.png'
import img1 from './assets/Rectangle 6.png'
import img2 from './assets/Rectangle 25 (1).png'
import img3 from './assets/Bill 1.png'
import img4 from './assets/Beverly 1.png' 
import img5 from './assets/Claudia 1.png'
import img6 from './assets/Avatar 1.png'

function App() {

  return (
    <>
       <section className="bg-black h-[100%] w-[100%] text-white">
        <nav className="nav flex items-center justify-between p-[20px]">
          <h2 className="font-bold text-[26px]">LOGO</h2>
          <div className="flex items-center gap-[40px]">
            <p >Home</p>
            <p className="border-b border-b-amber-500">About us</p>
            <p>Portfolio</p>
            <p>News</p>
            <button className="p-[15px_30px] bg-amber-600 rounded-[10px]">
              Contetn us
            </button>
          </div>
        </nav>

        <div className='flex justify-end items-center gap-[40px] '>

          <div>
            <p>Home  <span className='text-[#ff7300] '> About us</span></p><br />
            <h1 className='text-[30px] '>Lorem Ipsum is simply <br />dummy text of the printing <br /> and.</h1> <br />
            <p>Lorem Ipsum is simply dummy text of the printing and  <br />
              typesetting industry. Lorem Ipsum has been the <br />
              industry's standard dummy text ever since the 1500s.</p> <br /><br />

              <button className='p-[10px_20px] bg-amber-400 rounded-[20px] '> Get in touch </button>
          </div>

          <img className='ml-[50px]' src={img1} alt="" />
        </div>

        <div>
          <h2 className='text-[25px] pl-[100px] mt-[150px] '>Why work with us</h2> <br /> <br /><br />

          <div className='flex justify-center items-center gap-[30px] '>

            <div className='bg-[#1C140F] w-[380px] h-[350px] rounded-[10px] p-[30px]'> <br />
              <button className='p-[15px_25px] bg-[#B000DC1C] rounded-[5px]  '> Lorem Ipsum</button> <br /> <br />
              <h2 className='text-[20px] '>Lorem Ipsum</h2> <br />
              <p>Lorem Ipsum is simply dummy text of the  <br />
                printing and typesetting industry. Lorem <br />
                Ipsum has been the industry's standard <br />
                dummy text ever since the 1500s,</p>
            </div>

             <div className='bg-[#1C140F] w-[380px] h-[350px] rounded-[10px] p-[30px]'> <br />
              <button className='p-[15px_25px] bg-[#DC42001C] rounded-[5px]  '> Lorem Ipsum</button> <br /> <br />
              <h2 className='text-[20px] '>Lorem Ipsum</h2> <br />
              <p>Lorem Ipsum is simply dummy text of the  <br />
                printing and typesetting industry. Lorem <br />
                Ipsum has been the industry's standard <br />
                dummy text ever since the 1500s,</p>
            </div>

             <div className='bg-[#1C140F] w-[380px] h-[350px] rounded-[10px] p-[30px]'> <br />
              <button className='p-[15px_25px] bg-[#00DC8D1C] rounded-[5px]  '> Lorem Ipsum</button> <br /> <br />
              <h2 className='text-[20px] '>Lorem Ipsum</h2> <br />
              <p>Lorem Ipsum is simply dummy text of the  <br />
                printing and typesetting industry. Lorem <br />
                Ipsum has been the industry's standard <br />
                dummy text ever since the 1500s,</p>
            </div>

          </div>
        </div>

        <div className='flex justify-center items-center gap-[70px] bg-[#1C140F] pt-[100px] mt-[100px] '>

          <img src={img2} alt="" />
          <div>
            <h2>Lorem ipsum</h2><br />
            <h1>Lorem Ipsum is simply dummy text <br /> of the printing and typesetting <br /> industry. </h1> <br />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br />
              industry. Lorem Ipsum has been the industry's standard dummy <br />
              text ever since the 1500s, when an unknown printer took a galley of <br />
              type and scrambled it to make a type specimen book. It has <br />
              survived not only five centuries,</p>
          </div>
        </div>

        <div className=' pt-[120px]'>
          <h2 className='text-[25px] ml-[100px] '>Our Team</h2> <br /><br /><br />
          <div className='flex justify-center gap-[30px] items-center '>

            <div className='w-[270px] h-[250px] bg-[#1C140F] rounded-[10px] p-[20px] text-center  '>
              <img className='ml-[60px]' src={img3} alt="" /> 
              <h2 className='text-[18px] font-bold '>John peter</h2><br /> 
              <p>COO</p>
            </div>

            <div className='w-[270px] h-[250px] bg-[#1C140F] rounded-[10px] p-[20px] text-center  '>
              <img className='ml-[60px]' src={img4} alt="" /> 
              <h2 className='text-[18px] font-bold '>John peter</h2><br /> 
              <p>COO</p>
            </div>

            <div className='w-[270px] h-[250px] bg-[#1C140F] rounded-[10px] p-[20px] text-center  '>
              <img className='ml-[60px]' src={img5} alt="" /> 
              <h2 className='text-[18px] font-bold '>John peter</h2><br /> 
              <p>COO</p>
            </div>

            <div className='w-[270px] h-[250px] bg-[#1C140F] rounded-[10px] p-[20px] text-center  '>
              <img className='ml-[60px]' src={img6} alt="" /> 
              <h2 className='text-[18px] font-bold '>John peter</h2><br /> 
              <p>COO</p>
            </div>

          </div>
        </div>

      
        <div className="p-[100px] ">
          <h1 className="text-[30px] ">Lorem Ipsum</h1><br />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br />industry. </p>

        </div>


        

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

        <div className="flex justify-around items-start p-[100px_0px]">
          <div>
            <h2 className="font-bold ">LOGO</h2><br />
            <p>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. </p><br />
            <p>@Logo</p>
          </div>

          <div>
            <h2 className="">About us</h2> <br />
            <p>Zeux</p> <br />
            <p>Portfolio</p> <br />
            <p>Careers</p> <br />
            <p>Contact us</p> <br />
          </div>

          <div>
            <h2>Contact us</h2> <br />
            <p>Lorem Ipsum is simply dummy text <br /> of the printing and typesetting <br /> industry. </p> <br /> <br />
            <p>+908 89097 890</p>
          </div>

          <div>
            <br /><br /><br /><br /> <br /><br />
            <img src={img22} alt="" />
          </div>
        </div>


      </section>
    </>
  )
}

export default App
