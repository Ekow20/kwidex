import React from "react";
import avatar from "../assets/HomeSvgs/avatar.svg";
import settings from "../assets/HomeSvgs/settings-g.svg";
import funding from "../assets/HomeSvgs/funding-g.svg";
import project from "../assets/HomeSvgs/project-g.svg";
import payments from "../assets/HomeSvgs/payments-g.svg";
import profile from "../assets/HomeSvgs/profile-b.svg";

const MiniSidebar = ({ open }) => {
  return (
    <div
      className={`absolute z-[999] bg-white shadow-2xl rounded border-[1px] 
      border-gray-200 ${open ? "scale-100" : "scale-0"} transition-all
      duration-200 ease-in-out top-[10vh] right-5 w-[22vw] h-[79vh] `}
    >
      <div
        className="h-[27%]  flex flex-col 
      justify-center items-center"
      >
        <img src={avatar} alt="" className="h-[62px] w-[62px] rounded-full  " />
        <p className="text-lg">John Doe</p>
        <button className="btnSmall bg-[#02A94C]">Account Overview</button>
      </div>
      <div className="h-[1px] mt-2 bg-[#d5d5d5]" />
      <div className="">
        <SideLink text="Profile" svg={profile} />
        <SideLink text="Projects" svg={project} />
        <SideLink text="Payments" svg={payments} />
        <SideLink text="Funding" svg={funding} />
        <SideLink text="Settings" svg={settings} />
      </div>
      <div className="h-[1px]  bg-[#d5d5d5]" />
      <div className="flex flex-col items-center mt-2 ">
        <button className="btnSmall bg-[#F47A60]">Sign Out</button>
        <div
          className="flex justify-evenly w-full 
        px-3 text-[#666] text-sm mt-4"
        >
          <p>Privacy Policy</p>
          <p>• Terms</p>
          <p>• FAQs</p>
        </div>
      </div>
    </div>
  );
};

export default MiniSidebar;

const SideLink = ({ text, svg }) => (
  <div className="flex hover:bg-gray-200 pl-10 py-3 items-center">
    <img src={svg} alt="" className=" mr-2  w-[25px] h-[25px] " />
    <p className="text-[#666] text-sm">{text}</p>
  </div>
);
