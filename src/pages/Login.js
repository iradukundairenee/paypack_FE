import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Login = () => {
  document.title = "Paystack | login";
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
          <h1 className="text-xl md:text-2xl text-center p-2  md:p-8">
            Login here
          </h1>
          <form className="flex flex-col ">
            <input
              type="text"
              className="form-input my-4 rounded-lg"
              placeholder="Enter email"
            />
            <input
              type="text"
              className="form-input mb-4 rounded-lg "
              placeholder="Enter password"
            />

            <button className="bg-btn mb-4 hover:bg-log px-2 my-4 sm:px-4 lg:px-6  py-2 w-full rounded-md md:rounded-lg  mt-1 text-black">
              Login to your account
            </button>
          </form>
        </div>
      </div>
      <div className="p-4 text-sm md:text-base">
        <p>
          New to paystack
          <Link to="/register">
            <span className="font-bold"> signup </span>
          </Link>
          <br />
          <span className="font-bold"> Forgot password </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
