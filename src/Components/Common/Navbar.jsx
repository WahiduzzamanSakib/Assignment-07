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

            <NavLink to="/" className="btn flex items-center gap-2">
              <Home /> Home
            </NavLink>

            <NavLink to="/timeline" className="btn flex items-center gap-2">
              <Clock /> TimeLine
            </NavLink>

            <NavLink to="/stats" className="btn flex items-center gap-2">
              <BarChart3 /> Stats
            </NavLink>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;