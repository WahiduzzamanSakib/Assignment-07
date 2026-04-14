import React from 'react';
import logoImg from "../../../src/assets/logo.png"
import { Link, NavLink } from 'react-router';
import { Home, Clock, BarChart3 } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-base-100 shadow-sm ">
        <div className='container mx-auto flex justify-between'>
          <div>
            <img src={logoImg} alt="" />
          </div>
          <div className="flex gap-2">

            <NavLink to="/" className="btn flex items-center gap-1 sm:gap-2 text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2">
              <Home className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Home</span>
            </NavLink>

            <NavLink to="/timeline" className="btn flex items-center gap-1 sm:gap-2 text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">TimeLine</span>
            </NavLink>

            <NavLink to="/stats" className="btn flex items-center gap-1 sm:gap-2 text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2">
              <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Stats</span>
            </NavLink>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;