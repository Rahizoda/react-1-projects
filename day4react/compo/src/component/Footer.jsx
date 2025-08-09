import React from 'react'

const Footer = ({img22}) => {
  return (
      <>
      <div className="flex justify-around items-start bg-black border-t-1 text-white p-[100px_0px]">
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
          <div className="text-center bg-black text-white p-[50px_0px] border-t-1">
              <h2>Copyright ® 2021 Lorem All rights Rcerved</h2>
          </div>
          
    </>
  )
}

export default Footer
