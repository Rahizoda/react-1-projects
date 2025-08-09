
import './App.css'
import imglog from './assets/Frame.png'
import img1 from './assets/hero 1.png'
import img2 from './assets/Frame (1).png'
import img3 from './assets/Frame (2).png'
import img4 from './assets/Rectangle.png'
import img5 from './assets/top-rated 1.png'
import img6 from './assets/experience 1.png'
import img7 from './assets/insurance 1.png'
import img8 from './assets/Rectangle (1).png'
import img9 from './assets/Rectangle (2).png'
import img10 from './assets/Rectangle (3).png'
import img11 from './assets/3 1.png'
import img12 from './assets/Frame (3).png'
import img13 from './assets/Rectangle (4).png'
import img14 from './assets/Rectangle (5).png'
import img15 from './assets/Frame (4).png'

function App() {

  return (
    <>
      <nav className='nav'>
        <div className='bx1'>
          <img src={imglog} alt="" />
          <p>Life insurance</p>
          <p>Why Bello</p>
          <p>Help</p>
        </div>
        <div className='bxx1'>
          <button>Log in</button>
          <button>Get my price</button>
        </div>
      </nav>

      <section>
        <div>
          <h3>MEET BELLO</h3>
          <h1>A new kind of <br />life insurance</h1>
          <p>Secure your family's financial future, <br />in as little as 10 minutes.</p>
          <button className='btn'>Get my price</button>
        </div>
        <img src={img1} alt="" />
      </section>

      <div className="bx2">
        <img src={img2} alt="" />
        <div>
          <h3>Secure your future</h3>
          <h1>It’s more affordable <br /> than you think</h1>
          <p>Life insurance shouldn’t be confusing or <br />
            expensive. Bello’s term life insurance makes <br />
            protecting your loved ones easy and affordable.</p>
          <button className='bnt1'>Get My Price</button>
        </div>

      </div>

      <div className="bx2 bxx2">
        <div>
          <h3>Technology meets service</h3>
          <h1>We're here to help</h1>
          <p>Bella, our smart bot, can guide you to your perfect <br />
            policy. There’s also human help whenever you need <br /> it.</p>
          <button className='bnt1'>Get help</button>
        </div>
        <img src={img3} alt="" />
      </div>

      <div className="bx3">
        <img className='img' src={img4} alt="" />
        <img className='img img1' src={img8} alt="" />
        <h3>Top-Rated Term Life Insurance</h3>
        <h1>You’re in safe hands</h1>
        <p>We've partnered with, [insert underwriter], one of the world’s largest, most trusted insurance companies. This <br />
          means we can ensure reliability in paying Claims.</p>
        
        <div className="bxx3">
          <div>
            <img src={img5} alt="" />
            <h2>Top-Rated</h2>
            <p>A+ Financial Strength Rating by <br /> A.M. Best.  <a href="">What does this mean?</a></p>
          </div>

          <div>
            <img src={img6} alt="" />
            <h2>Expert guidance</h2>
            <p>We've placed millions of dollars in coverage <br /> people nationwide.</p>
          </div>

          <div>
            <img src={img7} alt="" />
            <h2>We care</h2>
            <p>We care about you. We’re a 5 <br />
              star insurance company. Well…  <br />
              Close enough!</p>
          </div>

        </div>
      </div>
     
      
      <div className="bx4 bx3">
        <h3>How it works</h3>
        <h1>Affordable life insurance in minutes</h1>
        <p>We use technology to save you time and money – no pushy sales agents, <br />
          paperwork, or extra fees. Just a few clicks and you’re done.</p>
        
        <div className="bxx4  ">
          <div>
            <img src={img9} alt="" />
            <h2>Get My Price</h2>
            <p>Choose the amount that you <br />
              would like to be covered for <br />
              and we’ll give you a quote.</p>
          </div>

          <div>
            <img src={img10} alt="" />
            <h2>Apply</h2>
            <p>Answer a few questions and <br /> get your final price.</p>
          </div>

          <div>
            <img src={img11} alt="" />
            <h2>You’re Covered</h2>
            <p>Congratulations on securing <br /> your loved ones financial future!</p>
          </div>
          
        </div>
            <button className='btn11'>Get my price</button>
      </div>


      <div className='bx2 bxx2 bxxxx2'>
        <img src={img12} alt="" />
        <div>
          <h3>You've Got This</h3>
          <h1>Everything you need— <br />completely free</h1>
          <p>Here’s the latest info, guides, and, helpful tools, from <br />
            the Bello team. Learn about life insurance, finances, <br />
            health and wellness.</p>
          
          <button className='bnt1'>Visit Learning Center</button>
        </div>
      </div>

      <div className="bx5">
        <div  className="box1 box11">
          <h1>Calculator</h1>
          How much life insurance do I <br /> need?
          <p>Calculate Coverage </p>
        </div>
        <div className="box1 boxx22">
          <h1>Term vs. <br />perm</h1>
          <p>Term vs. whole life insurance. <br />Which is best for you?</p>
          <p>See the winner</p>
        </div>
        <div className="box1 boxx33">
          <h1>Pricing</h1>
          <p>How much does life <br />insurance cost?</p>
          <p>Tell me more</p>
        </div>
        <div className="box1 boxx44">
          <h1>Insurance <br />101</h1>
          <p>The ultimate guide to life <br />insurance.</p>
          <p>Become an expert</p>
        </div>
      </div>

      <div className="bx6">
        <img className='imgbx6' src={img13} alt="" />
        <div className="bxx6">
          <h1>Get Started Today.</h1>
          <p>Join the Bello community of people who are securing their financial future.</p>
          <button className='btn'>Get my price</button>
        </div>
        <img className='img2bx6' src={img14} alt="" />
      </div>

      <div className="bx7">
        <div>
          <img src={imglog} alt="" />
          <p>Bello is a trading name of Bello Insurance Services <br />
            LLC. Bello policies are issued by [Insert Underwriter <br />
            here].</p>
          <input type="text" />
          <button>GO</button> <br /><br /><br />
          <img src={img15} alt="" />
        </div>

        <div>
          <h2>Resources</h2>
          <p>Term life insurance plans</p>
          <p>Insurance calculator</p>
          <p>Guide to life insurance</p>
          <p>Contact</p>
        </div>

        <div>
          <h2>Magazine</h2>
          <p>Insurance</p>
          <p>Finances</p>
          <p>Health</p>
          <p>Updates</p>
        </div>

        <div>
          <h2>More</h2>
          <p>Claims</p>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Licenses</p>
        </div>
      </div>
      
    </>
  )
}

export default App
