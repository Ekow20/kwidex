import React from "react";
import lock from "../assets/HomeSvgs/lock.svg";

const NavLink = ({ text, on, add }) => (
  <div
    className={`py-3  w-full ${add}
   ${on ? "bg-[#D6EEE0]" : ""} `}
  >
    <p className="text-center text-sm">
      {text} <span className="hidden sm:inline">Settings</span>
    </p>
  </div>
);

const Settings = () => {
  return (
    <div
      className="w-full h-full flex flex-col items-center 
    relative overflow-y-scroll pt-10 pb-28"
    >
      <div className="absolute md:static left-1 top-1">
        <h2 className="md:text-3xl text-lg">Account Settings</h2>
      </div>
      <div
        className="flex lg:w-[50%] md:w-[65%] w-[80%]   justify-between 
      shadow-2xl rounded-2xl mt-8 mb-8 md:mb-16  "
      >
        <NavLink text="Account" on={true} add={"rounded-l-2xl"} />
        <NavLink text="General" />
        <NavLink text="Notification" />
        <NavLink text="Privacy" add={"rounded-r-2xl"} />
      </div>
      <div
        className="border-[1.7px] rounded-md border-[#E5E5E5] 
      p-5 w-[95%] md:w-[70%] my-3 text-gray-500"
      >
        <div className="flex rounded-3xl bg-[#F5EFEF] px-4 py-2 mb-5 w-fit">
          <img src={lock} alt="" className="mr-2" />
          <p className="text-black">PASSWORD SETTINGS</p>
        </div>

        <div className="mb-4">
          <p>Enter Old Password</p>
          <input type="password" placeholder="Old Password" className="input" />
        </div>

        <div className="flex flex-col md:flex-row mb-4">
          <div className="flex-1 md:mr-4 mb-4 md:mb-0">
            <p>Enter New Password</p>
            <input
              type="password"
              placeholder="New Password"
              className="input"
            />
          </div>
          <div className="flex-1">
            <p>Confirm New Password</p>
            <input
              type="password"
              placeholder="Confirm New Password"
              className="input"
            />
          </div>
        </div>

        <button className="bg-[#02A94C] btnBig">Reset Password</button>
      </div>
      {/* ........................................................................ */}
      <div className="border-[1.7px] rounded-md border-[#E5E5E5] w-[95%] md:w-[70%] p-5 my-3">
        <div className="flex rounded-3xl bg-[#F5EFEF] px-4 py-2 mb-5 w-fit">
          <img src={lock} alt="" className="mr-2" />
          <p>DELETE ACCOUNT</p>
        </div>
        <p>
          Permanently remove your Personal Account and all of its contents from
          the Kwidex platform. This action is not reversible, so please continue
          with caution.
        </p>
        <div className="h-[1.6px] my-5 bg-[#E5E5E5]" />
        <button className="bg-[#F47A60] btnBig">Delete Account</button>
      </div>
    </div>
  );
};

export default Settings;
