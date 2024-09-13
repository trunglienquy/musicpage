// import { useEffect, useState } from 'react'
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  // const [title, setTitle] = useState('How are you feeling today')
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-[120px] bg-[#1c1c1c] flex justify-between items-center text-white">
      <div className="font-inspiration font-normal text-[50px] 350px:text-[35px] sm:text-[44px] md:text-[54px] lg:text-[54px] xl:text-[64px] px-[78px] py-0 cursor-pointer">
        <NavLink to="/">Emotional music</NavLink>
      </div>
      {/* <div className='font-poppins font-extralight text-[25px]'>
                <p>{title}</p>
            </div> */}
      <div className="hidden xl:flex px-[30px] py-0 text-[20px] cursor-pointer w-[300px] justify-around items-center font-oswald font-light ">
        <div className="">
          <NavLink to="/about">About</NavLink>
        </div>
        <div className="">
          <NavLink to="/technical">Technical</NavLink>
        </div>
        <ion-icon
          name="person-outline"
          onClick={() => navigate("/login")}
        ></ion-icon>
      </div>
      <i
        className="bx bx-menu z-50 xl:hidden block cursor-pointer mr-[50px] text-[40px] 350px:text-[29px]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></i>
      {console.log(isMenuOpen)}
      <div
        className={`absolute z-0 xl:hidden top-24 left-0 w-full h-[150px] bg-[#1c1c1c] flex flex-col items-center gap-6 transform transition-transform ${
          isMenuOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{ transition: "transform .3s ease, opacity .3s ease" }}
      >
        <div className="mt-[20px] text-center">
          <div className="mb-[15px]" onClick={() => setIsMenuOpen(false)}>
            <NavLink to="/about">About</NavLink>
          </div>
          <div className="mb-[15px]" onClick={() => setIsMenuOpen(false)}>
            <NavLink to="/technical">Technical</NavLink>
          </div>
          <ion-icon
            name="person-outline"
            onClick={() => {
              navigate("/login");
              setIsMenuOpen(false);
            }}
          ></ion-icon>
        </div>
      </div>
    </div>
  );
}

export default Header;
