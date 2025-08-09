import "./App.css";
import { FaMobile , FaArrowRight  } from 'react-icons/fa'

import img1 from "./assets/joy_stick 1.png";
import img2 from "./assets/unity 1.png";
import img3 from "./assets/unreal 1.png";
import img4 from "./assets/cry 1.png";
import img5 from "./assets/Rectangle 23.png";
import img6 from "./assets/Rectangle 24.png";
import img7 from "./assets/Rectangle 25.png";
import img8 from "./assets/Rectangle 26.png";
import img9 from "./assets/Rectangle 4.png";
import bgimg from './assets/db4d123c4b390965f684f22d4bf13849 1.png'
import img10 from './assets/Group 48.png'
import img11 from './assets/Group 49.png'
import img12 from './assets/Group 50.png'
import img13 from './assets/Group 51.png'
import img14 from './assets/Group 52.png'
import img15 from './assets/Group 53.png'
import img16 from "./assets/Rectangle 15.png";
import img17 from "./assets/Rectangle 16.png";
import img18 from "./assets/Rectangle 17.png";
import img19 from "./assets/Rectangle 18.png";
import img20 from "./assets/Rectangle 19.png";
import img21 from "./assets/Rectangle 20.png";
import img22 from './assets/Group 12.png'



function App() {
  return (
    <>
      <section className="bg-black h-[100%] w-[100%] text-white">
        <nav className="nav flex items-center justify-between p-[20px]">
          <h2 className="font-bold text-[26px]">LOGO</h2>
          <div className="flex items-center gap-[40px]">
            <p className="border-b border-b-amber-500">Home</p>
            <p>About us</p>
            <p>Portfolio</p>
            <p>News</p>
            <button className="p-[15px_30px] bg-amber-600 rounded-[10px]">
              Contetn us
            </button>
          </div>
        </nav>


        
        <div className="flex items-center justify-around">
          <div className="p-[50px] ml-[100px]">
            <h2 className="text-amber-600 font-bold">3D game Dev </h2>
            <h1 className="text-[45px] font-bold">
              Work that we <br /> produce for our <br /> clients
            </h1>
            <br />
            <p>
              Lorem Ipsum is simply dummy text of the printing and <br />
              typesetting industry. Lorem Ipsum has been the industry's <br />
              standard.
            </p>{" "}
            <br />
            <button className="p-[15px_30px] bg-amber-500 rounded-4xl">
              Get more details
            </button>
          </div>

          <img className="ml-[50px]" src={img1} alt="" />
          <img
            className="absolute top-[400px] letf-[400px]"
            src={img2}
            alt=""
          />
          <img
            className="absolute top-[270px] left-[1050px] "
            src={img3}
            alt=""
          />
          <img
            className="absolute top-[250px] left-[700px]"
            src={img4}
            alt=""
          />
        </div>

        <div className="flex justify-between items-center mt-[100px] p-[40px_140px]">
          <h1 className="text-[30px] font-bold">Currently Trending Games</h1>
          <button className="border p-[10px_20px] rounded-[5px]">
            SEE ALL
          </button>
        </div>

        <div className="flex justify-center gap-[30px] items-center mt-[50px] pb-[50px] text-[25px] font-bold">
          <div className="text-center">
            <img src={img5} alt="" />
            <br />
            <h3>🔥 40 Followers</h3>
          </div>
          <div className="text-center">
            <img src={img6} alt="" />
            <br />
            <h3>🔥 40 Followers</h3>
          </div>
          <div className="text-center">
            <img src={img7} alt="" /> <br />
            <h3>🔥 40 Followers</h3>
          </div>
          <div className="text-center">
            <img src={img8} alt="" />
            <br />
            <h3>🔥 40 Followers</h3>
          </div>
        </div>

        <h1 className=" text-[30px] text-center m-[40px_0px] ">
          Lorem Ipsum is simply dummy text of the <br /> printing and
          typesetting industry.
        </h1>

        <div className="p-[50px_110px] ">
          <h2 className="text-[30px]">Lorem Ipsum</h2> <br />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
            <br />
            industry. Lorem Ipsum has been the industry's standard dummy <br />
            text ever since the 1500s,
          </p>
          <br />
          <br />
          <img src={img9} alt="" />
        </div>

        <div style={{ backgroundImage: `url(${bgimg})` }} className=' h-[110vh]  bg-no-repeat '>
          <div className="bg-[#0000008a] h-[100%] text-center p-[50px_0px] ">

          <h1 className="text-[30px] ">
            Lorem Ipsum is simply dummy text of the printing <br />
            and typesetting industry.
            </h1> <br />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br />
              industry's standard dummy text ever since the 1500s,</p>

            <div className="flex justify-center flex-wrap w-[900px] mt-[50px] gap-[30px] m-auto ">

              <div className="text-center w-[200px] h-[200px] flex flex-col justify-center items-center gap-[20px]" >
                <img src={img10} alt="" />
                <p>Mobile Game Development</p>
                < FaArrowRight  size={20} className="text-[#9e6c10]"  />
              </div>
              <div className="text-center w-[200px] h-[200px] flex flex-col justify-center items-center gap-[20px]" >
                <img src={img11} alt="" />
                <p>Mobile Game Development</p>
                < FaArrowRight  size={20} className="text-[#9e6c10]"  />
              </div>
              <div className="text-center w-[200px] h-[200px] flex flex-col justify-center items-center gap-[20px]" >
                <img src={img12} alt="" />
                <p>Mobile Game Development</p>
                < FaArrowRight  size={20} className="text-[#9e6c10]"  />
              </div>
              <div className="text-center w-[200px] h-[200px] flex flex-col justify-center items-center gap-[20px]" >
                <img src={img13} alt="" />
                <p>Mobile Game Development</p>
                < FaArrowRight  size={20} className="text-[#9e6c10]"  />
              </div>
              <div className="text-center w-[200px] h-[200px] flex flex-col justify-center items-center gap-[20px]" >
                <img src={img14} alt="" />
                <p>Mobile Game Development</p>
                < FaArrowRight  size={20} className="text-[#9e6c10]"  />
              </div>
              <div className="text-center w-[200px] h-[200px] flex flex-col justify-center items-center gap-[20px]" >
                <img src={img15} alt="" />
                <p>Mobile Game Development</p>
                < FaArrowRight  size={20} className="text-[#9e6c10]"  />
              </div>

            </div>

          </div>
        </div>

        <div className="text-center p-[100px_0px] " >

          <h1 className="text-[30px]">Our Recent Projects</h1> <br />
          <p>Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. </p> <br /><br /><br />
          <div className="flex items-center justify-center gap-[20px] ">
            <img src={img16} alt="" />
            <img src={img17} alt="" />
            <img src={img18} alt="" />
          </div>

          <div className="flex mt-[20px] items-center justify-center gap-[20px] ">
            <img src={img20} alt="" />
            <img src={img19} alt="" />
            <img src={img21} alt="" />
          </div>

          <button className=" p-[15px_25px] border rounded-[5px] mt-[30px] ">SEE ALL</button>
        </div>

        <div className="p-[100px]  ">
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
  );
}

export default App;
