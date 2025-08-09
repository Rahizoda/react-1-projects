import "./App.css";

import logoimg from "./assets/Jobply.png";
import img1 from "./assets/Hero Section.png";

import img2 from './assets/Group 279.png'
import img3 from './assets/Group 282.png'
import img4 from './assets/Group 325.png'
import img5 from './assets/iconoir_bank.png'
import img6 from './assets/Group 403.png'
import img7 from './assets/bi_journal-code.png'
import img8 from './assets/bi_briefcase.png'
import img9 from './assets/grommet-icons_technology.png'
import img10 from './assets/carbon_user-multiple.png'
import img11 from './assets/Group.png'
import img12 from './assets/Group 415.png'
import img13 from './assets/Group 405.png'
import img14 from './assets/Vector.png'
import img15 from './assets/Group 216.png'
import img16 from './assets/Vector (1).png'
import img17 from './assets/Group 216 (1).png'
import img18 from './assets/Group 216 (2).png'
import img19 from './assets/Group 419.png'
import img20 from './assets/Group 174.png'
import img21 from './assets/Rectangle 178.png'
import img22 from './assets/Rectangle 178 (1).png'

function App() {
  return (
    <>

      <nav className="nav">
        <img src={logoimg} alt="" />
        <div className="bx">
          <i>Home</i>
          <i> Categories</i>
          <i>Service</i>
          <i>Jobs</i>
        </div>
        <button>Post a Vacancy</button>
      </nav>

      <div className="box">
      <section>
        <h1> Find & Apply For <br /> Your Dream Job</h1>
        <p>The website is chockablock with useful features, allowing you to <br /> efficiently search and apply for roles across all sectors, <br />experience levels and locations.</p>
        <div className="btn">
          <button className="a1">Job title or Keyword</button> <hr />
          <button className="a2">Location</button>
          <button className="a3">Search</button>
        </div>
        </section>
        <img src={img1} alt="" />
      </div>


      <div className="bx2">
        <div className="bxx2">
          <h1>Popular Job Posts</h1>
          <div bxxx2>
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
        </div>
      </div>

      <div className="bx4">
        <h1>Job Categories</h1>
        <div className="bxx4">
          <div className="bxxx4">
            <img src={img5} alt="" />
            <h2>Accouting & Finance </h2>
            <p>125 Job Vacancy</p>
          </div>
          <div className="bxxx4">
            <img src={img6} alt="" />
            <h2>UI/UX Design</h2>
            <p>52 Job Vacancy</p>
          </div>
          <div className="bxxx4">
            <img src={img7} alt="" />
            <h2>Content Writing</h2>
            <p>150 Job Vacancy</p>
          </div>
          <div className="bxxx4">
            <img src={img7} alt="" />
            <h2>Accouting & Finance</h2>
            <p>125 Job Vacancy</p>
          </div>
          <div className="bxxx4">
            <img src={img8} alt="" />
            <h2>Digital Marketing</h2>
            <p>150 Job Vacancy</p>
          </div>
          <div className="bxxx4">
            <img src={img9} alt="" />
            <h2>Technical Support</h2>
            <p>350 Job Vacancy</p>
          </div>
          <div className="bxxx4">
            <img src={img10} alt="" />
            <h2>Human Resource</h2>
            <p>35 Job Vacancy</p>
          </div>
          <div className="bxxx4">
            <img src={img11} alt="" />
            <h2>Art & Illustration</h2>
            <p>52 Job Vacancy</p>
          </div>
        </div>
      </div>

      <div className="bx5">
        <div className="bxx5">
          <h1>Get Start New Job</h1>
          <p>create an account so you can get job <br /> information that suits you, and you can <br /> apply the salary your demand.</p> <br />
          <button className="button">Create an Account</button>
        </div>
        <img src={img12} alt="" />
      </div>

      <div className="bx6">
        <img src={img13} alt="" />
        <div className="bxx6">
          <h1>Post a Job for <br /> UX Designer</h1>
          <p>create an account so you can get job <br />information that suits you, and you can <br /> apply the salary your demand.</p>
          <button className="button">Post a Job</button>
        </div>
      </div>

      <div className="bx7">
        <h1>Great Feedback <br />From Candidates</h1>
        <div className="bxx7">

        <div >
          <div>
            <img  src={img14} alt="" />
            <p>Very decent services & care about my health. Really <br /> happy with his advice. Lorem Ipsum is simply dummy <br />
              text of the printing and typesetting industry Very <br />decent services & care about my health. Really happy <br />
              with his advice.</p>
            <img className="i1" src={img15} alt="" />
          </div>
        </div>
        <div >
          <div>
            <img  src={img16} alt="" />
            <p>Very decent services & care about my health. Really <br /> happy with his advice. Lorem Ipsum is simply dummy <br />
              text of the printing and typesetting industry Very <br />decent services & care about my health. Really happy <br />
              with his advice.</p>
            <img className="i1" src={img17} alt="" />
          </div>
        </div>
        <div >
          <div>
            <img  src={img16} alt="" />
            <p>Very decent services & care about my health. Really <br /> happy with his advice. Lorem Ipsum is simply dummy <br />
              text of the printing and typesetting industry Very <br />decent services & care about my health. Really happy <br />
              with his advice.</p>
            <img className="i1" src={img18} alt="" />
          </div>
        </div>
        </div>
      </div>

      <div className="bx8">
        <div className="bxx8">
          <h1>Subscribe to get <br />update vacancy post</h1>
        <div className="sub">
          <input type="text" name="" id="" placeholder="infomail856@gmail.com"/>
          <button className="button">Subscribe</button>
        </div>
        </div>
        <img src={img19} alt="" />
      </div>

      <footer>
        <div>
          <br /><br />
          <img src={logoimg} alt="" />
          <p>152/3 , Western Road, New York</p>
          <a href="">Call Us: +99-8569-5234</a><br /><br />
          <img src={img20} alt="" />
        </div>
        
        <div>
          <h2>Explore</h2>
          <a href=""> Featured Job</a>
          <p>Recent Job Post</p>
          <p>Total Candidates</p>
          <p>Support</p>
        </div>

        <div>
          <h2>Useful Link</h2>
          <p>About Us</p>
          <p>Blog</p>
          <p>Company</p>
          <p>Contact Us</p>
        </div>

        <div>
          <h2>Latest News</h2>
          <div className="bxfoter">
            <img src={img21} alt="" />
            <div>
              <p>Understanding the Cybersecurity <br /> Landscape in 2021</p>
              <a href="">21 June, 2021</a>
            </div>
          </div>

          <div className="bxfoter">

            <img src={img22} alt="" />
            <div>
              <p>How to Design for Maximum <br /> Product Trust</p>
              <a href="">21 June, 2021</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
