

import img1 from './assets/Group 7 (1).png'
import img16 from './assets/Group 7 (2).png'
import Navbar from './component/Navbar'
import img2 from './assets/Group 1390.png'
import Section1 from './component/Section1'
import img3 from './assets/box.png'
import Section2 from './component/Section2'
import img4 from './assets/speedometer 1.png'
import img5 from './assets/positive-vote 1.png'
import img6 from './assets/piggy-bank 1.png'
import Section3 from './component/Section3'
import img7 from './assets/Group 1392.png'
import Section4 from './component/Section4'
import img8 from './assets/image 3.png'
import img9 from './assets/image 3 (1).png'
import img10 from './assets/image 4.png'
import img11 from './assets/image 6.png'
import img12 from './assets/Group 1400.png'
import img13 from './assets/Placeholder.png'
import img14 from './assets/Placeholder (1).png'
import Section5 from './component/Section5'
import img15 from './assets/Group 1278.png'
import Section6 from './component/Section6'
import Footer from './component/Footer'

const App = () => {


  return (
    <>
      <Navbar img2={img2} img1={img1} />
      <Section1 img3={img3} />
      <Section2 img4={img4} img5={img5} img6={img6} />
      <Section3 img7={img7} />
      <Section4 img8={img8} img9={img9} img10={img10} img11={img11} img12={img12} />
      <Section5 img13={img13} img14={img14} />
      <Section6 img15={img15} />
      <Footer img16={img16} />
    </>
  )
}

export default App