import React from "react";
import lock from "../assets/HomeSvgs/lock.svg";

const Settings = () => {
  return (
    <div className="w-full h-full flex flex-col items-center overflow-y-scroll">
      <h2 className="text-3xl">Account Settings</h2>

      <div
        className="border-[1.7px] rounded-md border-[#E5E5E5] 
      p-5 w-[70%] my-3 text-gray-500"
      >
        <div className="flex rounded-3xl bg-[#F5EFEF] px-4 py-2 mb-5 w-fit">
          <img src={lock} alt="" className="mr-2" />
          <p className="text-black">PASSWORD SETTINGS</p>
        </div>

        <div className="mb-4">
          <p>Enter Old Password</p>
          <input
            type="password"
            placeholder="Old Password"
            className="px-1 py-3 bg-[#D6EEE0] border-none
              rounded w-full"
          />
        </div>

        <div className="flex mb-4">
          <div className="flex-1 mr-4">
            <p>Enter New Password</p>
            <input
              type="password"
              placeholder="New Password"
              className="px-1 py-3 bg-[#D6EEE0] border-none
              rounded w-full"
            />
          </div>
          <div className="flex-1">
            <p>Confirm New Password</p>
            <input
              type="password"
              placeholder="Confirm New Password"
              className="px-1 py-3 bg-[#D6EEE0] border-none
              rounded w-full"
            />
          </div>
        </div>

        <button className="bg-[#02A94C] py-3 px-7 rounded-3xl text-white">
          Reset Password
        </button>
      </div>
      {/* ........................................................................ */}
      <div className="border-[1.7px] rounded-md border-[#E5E5E5] w-[70%] p-5 my-3">
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
        <button className="bg-[#F47A60] py-3 px-7 rounded-3xl text-white">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Settings;
