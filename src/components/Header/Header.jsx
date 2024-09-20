// import { useEffect, useState } from 'react'
import { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { assets } from "../../assets/assets";

function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <NavLink to="/">
        <img src={assets.logo} alt="" className="w-24" />
      </NavLink>

      <ul className="hidden sm:flex gap-5 text-lg text-white">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden"></hr>
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden"></hr>
        </NavLink>
        <NavLink to="/technical" className="flex flex-col items-center gap-1">
          <p>Technical</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden"></hr>
        </NavLink>
        <NavLink to="/teams" className="flex flex-col items-center gap-1">
          <p>Teams</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden"></hr>
        </NavLink>
      </ul>

      <div className="flex items-center gap-6 text-white text-lg cursor-pointer">
        <img
          src={assets.profile_icon}
          alt=""
          className="w-5 cursor-pointer"
          onClick={() => navigate("/login")}
        />
        <img
            onClick={() => setIsMenuOpen(true)}
            src={assets.menu_icon}
            alt=""
            className="w-5 cursor-pointer sm:hidden"
          />
      </div>
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-black transition-all ${
          isMenuOpen ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-white">
          <div
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setIsMenuOpen(false)}
            className="py-2 pl-6"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setIsMenuOpen(false)}
            className="py-2 pl-6"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setIsMenuOpen(false)}
            className="py-2 pl-6"
            to="/technical"
          >
            TECHNICAL
          </NavLink>
          <NavLink
            onClick={() => setIsMenuOpen(false)}
            className="py-2 pl-6"
            to="/teams"
          >
            TEAMS
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
