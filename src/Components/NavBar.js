import React from "react";
// import { BiMenuAltLeft } from "react-icons/bi";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header className="flex p-2 sm:p-6  justify-between  content-center ">
        <Link to="/">
        <div className="flex">
          <HiMenuAlt1 color="#038858" className="text-3xl" />
          <span className=" text-xl sm:text-2xl font-bold"> PayStack</span>
        </div>
        </Link>
        <nav>
          <ul className="flex">
            <Link  to="/login">
            <li className="mr-2 sm:mr-6">
              <a href="#Link" className="text-sm lg:text-base">
                Login
              </a>
            </li>
            </Link>
            <Link to='/register'>
            <li>
              <a
                href="#link"
                className="bg-btn px-2 sm:px-4 lg:px-6  py-1 sm:py-2 lg:py-3  rounded-lg  mt-1 text-black"
              >
                <button className=" text-sm">Create account</button>
              </a>
            </li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
