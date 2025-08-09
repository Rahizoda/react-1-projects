import './App.css'
import img1 from './assets/Logo.png'
import Nav from './comonent/Nav'
import Section1 from './comonent/Section1'
import img2 from './assets/imagedog.png'
import Section3 from './comonent/Section3'
import img3 from './assets/icon.png'
import img4 from './assets/icon (1).png'
import img5 from './assets/icon (2).png'
import img6 from './assets/icon (3).png'
import img7 from './assets/image copy.png'
import Section4 from './comonent/Section4'
import img8 from './assets/imageuser.png'
import img9 from './assets/image (1).png'
import img10 from './assets/image (2).png'
import img11 from './assets/image (3).png'
import Section5 from './comonent/Section5'
import Section6 from './comonent/Section6'
import img12 from './assets/image (4).png'
import Footer from './comonent/Footer'
import img13 from './assets/Logo (1).png'


function App() {

  return (
    <>
      <Nav img1={img1} />
      <Section1 img2={img2} />
      <Section3 img3={img3 } img4={img4} img5={img5} img6={img6} />
      <Section4 img7={img7} />
      <Section5 img8={img8} img9={img9} img10={img10} img11={img11} />
      <Section6 />
      <Footer img12={img12} img13={img13} />
    </>
  )
}

export default App
