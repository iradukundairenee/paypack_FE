import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";
const Register = () => {
  document.title = "Paystack  |  register";

  return (
    <div className="bg-main min-h-screen flex items-center flex-col content-center py-24  p-0 box-border">
      <Link to="/">
        <div className="flex mb-8 ">
          <HiMenuAlt1 color="#038858" className="text-3xl" />
          <span className=" text-xl sm:text-2xl font-bold"> PayStack</span>
        </div>
      </Link>
      <div className="flex item-center flex-col content-center justify-center">
        <div className="bg-w m-4 sm:m-2 md:m-0 shadow-lg w-11/12 md:w-96 rounded-lg p-4 md:p-8">
          <h1 className="text-xl md:text-2xl text-center p-2  md:p-4">
            Create a free account
          </h1>
          <form className="flex flex-col ">
            
            <span className="py-4
            ">Full name</span>
            <input
              type="text"
              className="form-input  rounded-lg"
              placeholder="Enter email"
            />
            <span  className="py-4">Email</span>
            <input
              type="text"
              className="form-input rounded-lg "
              placeholder="Enter password"
            />
            <span className="py-4">Phone</span>
            <div className="flex">
              <input
                type="text"
                className="form-input w-1/5 rounded-lg"
                placeholder="+xxx"
              />
              <input
                type="text"
                className="form-input  ml-4 w-3/4 rounded-lg "
                placeholder="Enter phone"
              />
            </div>
            <span  className="py-4">Create password</span>

            <input
              type="text"
              className="form-input  rounded-lg"
              placeholder="Enter password"
            />
            <span  className="py-4">Confirm password</span>

            <input
              type="text"
              className="form-input rounded-lg "
              placeholder="Re-enter password"
            />
            <br/>
            <button className="bg-btn py-2 px-2 hover:bg-log sm:px-4 lg:px-6  w-full rounded-md md:rounded-lg  mt-1 text-black">
              Create your account
            </button>
          </form>
        </div>
      </div>
      <div className="p-4 text-sm md:text-base">
        <p>
          New to paystack{" "}
          <Link to="/login">
            <span className="font-bold"> Login</span>
          </Link>
          <br />
        </p>
      </div>
    </div>
  );
};

export default Register;
