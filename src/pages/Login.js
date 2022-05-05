import React from "react";
import logo from "../assets/LoginSvgs/white-logo.svg";
import svg1 from "../assets/LoginSvgs/svg1.svg";
import svg2 from "../assets/LoginSvgs/svg2.svg";
import svg3 from "../assets/LoginSvgs/svg3.svg";

const Login = () => {
  return (
    <div className="flex min-h-screen">
      <div
        className="flex-1 bg-[#0B6158] text-white justify-center
       flex flex-col items-center"
      >
        <div className="">
          <img src={logo} alt="Kwidex Logo" width="80" height="80" />
          <h1 className="text-5xl max-w-md mt-10">
            Make an impact by supporting farmers
          </h1>
          <div className="text-xl">
            <SvgSection svg={svg1} text="Reduce proverty among farmers." />
            <SvgSection
              svg={svg2}
              text="Contribute to ensuring food security."
            />
            <SvgSection
              svg={svg3}
              text="Earn extra income through your investments."
            />
          </div>
        </div>
      </div>

      {/* ......................................................................... */}
      <div className="flex-1 bg-white text-black flex items-center justify-center py-12">
        <div className="w-4/6">
          <div className="mb-4">
            <h2 className="text-2xl">Log In To Your Account</h2>
            <p className="py-[2px] cursor-pointer">
              Don't have an account?
              <span className="text-[#0FAD56] ml-2">Sign Up</span>
            </p>
          </div>

          <div className="my-5">
            <p>Mobile Number</p>
            <input
              type="tel"
              placeholder="Mobile Number"
              className="px-1 py-3 bg-[#D6EEE0] border-none
              rounded w-full"
            />
          </div>
          <div className="my-5">
            <p>Password </p>
            <input
              type="password"
              placeholder="Password "
              className="px-1 py-3 bg-[#D6EEE0] border-none 
              rounded w-full "
            />
          </div>
          <button className="bg-[#48CB2A] p-3 w-full mb-5 text-white rounded">
            Log In
          </button>
          <div className="h-[1px] bg-gray-200 w-full mb-4" />
          <div
            className="cursor-pointer hover:border-b-[#02A94C] border-b-2
           border-b-transparent pb-1 transition-all duration-150 ease-in-out ml-auto w-fit "
          >
            <p className=" ">Forgot Password?</p>
          </div>

          <div className="w-full bg-[#DCDF0F] mt-7 p-9 rounded ">
            <p className="font-bold mb-3">
              We have discontinued social media and email logins on Kwidex.
            </p>
            <p>
              You are required to re-confiqure your account to continue using
              your account. Simply tap / click on the button below.
            </p>
            <button className="bg-[#02A94C] text-white mt-4 px-4 py-2 rounded">
              Setup My Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SvgSection = ({ svg, text }) => (
  <div className="flex items-center my-5 max-w-sm">
    <img
      src={svg}
      alt=""
      width="45"
      height="45"
      className="border-2 border-white mr-2 rounded-full p-[8px]"
    />
    <p>{text}</p>
  </div>
);

export default Login;
