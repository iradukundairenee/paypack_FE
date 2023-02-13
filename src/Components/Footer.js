import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram, BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (
    <IconContext.Provider value={{ className: "text-2xl mt-4" }}>
      <footer className="bg-w p-16 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4  md:grid-rows-2">
        <div>
          <h1 className="text-3xl font-bold">Paystack</h1>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div>
          <h1 className="font-bold text-2xl py-5 px-1 ">Contact</h1>
          <p className="text-btn ml-2">paystack@gmail.com</p>
          <ul className="grid p-2 grid-cols-4 w-2/3 sm:w-2/5 md:w-3/5">
            <li>
              <a href="#link">
                <BsFacebook />
              </a>
            </li>
            <li>
              <a href="#link">
                <AiOutlineTwitter />
              </a>
            </li>
            <li>
              <a href="#link">
                <BsInstagram />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-2xl py-5 px-1 ">Support</h1>
          <ul className="p-2 grid grid-cols-1 gap-2">
            <li>
              <a href="#link">Contact Us</a>
            </li>
            <li>
              <a href="#link">FQA</a>
            </li>
            <li>
              <a href="#link"> Product Registration</a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-2xl py-5 px-1 ">Customers</h1>
          <ul className="p-2">
            <li>
              <a href="#link">Testimonials</a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-2xl py-5 px-1 ">Subscription</h1>
          <form action="" className="flex">
            <input
              type="text"
              placeholder="Enter email"
              className="form-input mr-2 rounded-lg"
            />
            <button className="bg-btn hover:bg-log  py-2 px-4 md:px-8 rounded-lg">
              {" "}
              Send
            </button>
          </form>
        </div>
      </footer>
      <div className="bg-w py-4 border-t-0  border-log">
        <p className="text-center opacity-20 text-grey">Powered by Robert Niyitanga</p>
      </div>
    </IconContext.Provider>
  );
};

export default Footer;
