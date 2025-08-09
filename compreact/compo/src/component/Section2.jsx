
const Section2 = ({img3}) => {
  return (
    <div className="bg-[#1C140F] pt-[100px]  text-white text-center">
          <h1 className="text-[30px]">Say hello</h1><br />
          <p>Lorem Ipsum is simply dummy text of the printing .</p>


          <div className="m-auto p-[50px_400px] text-[#4F4F4F] ">
              <form action="" className="text-start m-auto  ">
                  <div className="flex gap-[20px]">
                      
                  <div>
                  <label htmlFor="1">First Name</label><br /><br />
                  <input className="border w-[320px] p-[15px] rounded-[5px] " type="text" id="1" /> <br />
                </div>

                 <div>
                  <label htmlFor="2">Last Name</label><br /><br />
                  <input className="border w-[320px] p-[15px] rounded-[5px] " type="text" id="2" />
                </div>

                 </div> <br />
                  <label htmlFor="3">Email Adress</label> <br /><br />
                  <input className="w-[660px] p-[15px] rounded-[5px] border " type="text" id="3"/> <br /> <br />

                  <label htmlFor="4">Message</label> <br /> <br />
                  <input className="w-[660px] p-[15px] border h-[300px] flex flex-wrap rounded-[5px] " type="message" id="4" /><br /><br />
                  <button className="ml-[500px] text-white w-[150px] rounded-[5px] p-[15px_30px] bg-[#c9690f] ">Get in touch</button>
                  <img className="absolute top-[1950px] left-[10px] " src={img3} alt="" />
              </form>
          </div>
    </div>
  );
}

export default Section2;
