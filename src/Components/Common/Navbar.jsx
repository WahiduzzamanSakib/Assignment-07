import React from 'react';
import logoImg from "../../../src/assets/logo.png"
import { Link } from 'react-router';
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
            <button className="btn">
              <Link to="/" className="flex items-center gap-2">
                <Home /> Home
              </Link>
            </button>

            <button className="btn">
              <Link to="/timeline" className="flex items-center gap-2">
                <Clock /> TimeLine
              </Link>
            </button>

            <button className="btn">
              <Link to="/stats" className="flex items-center gap-2">
                <BarChart3 /> Stats
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;