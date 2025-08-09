import './App.css'

import Navbar from './component/compo'
import Section1 from './component/Section1'
import img1 from './assets/Rectangle 274.png'
import img3 from './assets/Rectangle 274 (1).png'
import Section2 from './component/Section2'
import Section3 from './component/Section3'
import img2 from './assets/Rectangle 276.png'
import img4 from './assets/Rectangle 276 (1).png'
import img5 from './assets/Rectangle 276 (2).png'
import img6 from './assets/Rectangle 276 (3).png'
import img7 from './assets/Rectangle 276 (4).png'
import img8 from './assets/Rectangle 276 (5).png'
import img9 from './assets/Rectangle 276 (6).png'
import Section from './component/Section'
// import img10 from './assets/Group 12 (2).png'
import Footer from './component/Footer'


function App() {

  return (
    <>
       <Navbar/>
      <Section1 />

      <div className='flex justify-around items-start gap-[20px] bg-black text-white'>
        <div>
        <Section2 img1={img1} />
        <Section2 img1={img3} />
        </div>

        <div>
         <Section3 color={`#FF8484`} img2={img2} /><br />
         <Section3 color={`#FF7C32`} img2={img4} /><br />
         <Section3 color={`#2351F5`} img2={img5} /><br />
         <Section3 color={`#23A54F`} img2={img6} /><br />
         <Section3 color={`#2351F5`} img2={img7} /><br />
         <Section3 color={`#9921C3`} img2={img8} /><br />
         <Section3 color={`blue`} img2={img9} /><br />
        </div>
      </div>
      <Section />
      <Footer img={img9} />
    </>
  )
}

export default App
