import React from 'react';

const Nav = () => {
  return (
      <>
         <nav className="nav flex bg-black text-white items-center justify-between p-[20px]">
          <h2 className="font-bold text-[26px]">LOGO</h2>
          <div className="flex items-center gap-[40px]">
            <p >Home</p>
            <p >About us</p>
            <p>Portfolio</p>
            <p>News</p>
            <button className="p-[15px_30px] bg-amber-600 rounded-[10px]">
              Contetn us
            </button>
          </div>
        </nav>
      </>
  );
}

export default Nav;




