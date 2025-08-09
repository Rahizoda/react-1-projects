import Button from "./Button";

const Navbar = ({img1 , img2}) => {
  return (
    <div className='flex items-center sm:justify-between md:justify-around p-[20px] '>
          <img src={img1} alt="" />
          <select className="sm:hidden md:block " name="" id="">
              <option value="">0 800 750 643</option>
          </select>
          <select className="sm:hidden md:block " name="" id="">
              <option value="">ПРО НАС</option>
          </select>
          <p className="sm:hidden md:block " >ЦЕНЫ</p>
      <p className="sm:hidden md:block " >КОНТАКТЫ</p>
      <div  className="flex sm:hidden md:block items-center gap-[10px]">
          <Button colortxt={'black'} text={"Вход"} color={'white'} width={'100px'} rounded={'20px'} />
        <Button colortxt={'white'} text={"регистрация"} color={"blue"} width={'200px'} rounded={'20px'} />
      </div>
        <select className="sm:hidden md:block " name="" id="">
          <option value="">Рус</option>
      </select>
      
      <img className="sm:block md:hidden " src={img2} alt="" />

    </div>
  );
}

export default Navbar;
