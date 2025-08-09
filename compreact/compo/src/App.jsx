
import './App.css'
import Nav from './component/nav'
import Section1 from './component/section1'
import img1 from './assets/Group 12 (1).png'
import img2 from './assets/Huge Global.png'
import Section2 from './component/Section2'
import img3 from './assets/Vector 4.png'
import Section3 from './component/Section3'
import Footer from './component/Footer'
import img4 from './assets/Group 12 (2).png'


function App() {
  

  return (
    <>
      <Nav />
      <Section1 img1={img1} img2={img2} />   
      <Section2 img3={img3} />
      <Section3 />
      <Footer img44={img4} />
    </>
  )
}

export default App
