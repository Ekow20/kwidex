import React from "react";
import banner from "../assets/Images/banner.jpg";
import avatar from "../assets/HomeSvgs/avatar.svg";
import eye from "../assets/HomeSvgs/eye.svg";
import funding from "../assets/HomeSvgs/funding-b.svg";
import payments from "../assets/HomeSvgs/payments.svg";
import wallet from "../assets/HomeSvgs/wallet-b.svg";
import withdrawal from "../assets/HomeSvgs/withdrawal.svg";
import referral from "../assets/HomeSvgs/referral-b.svg";
import settings from "../assets/HomeSvgs/setting-black.svg";
import project from "../assets/HomeSvgs/project-b.svg";
import profile from "../assets/HomeSvgs/profile-b.svg";

const Sidebar = () => {
  return (
    <div className="bg-[#F5EFEF] flex-1 overflow-y-scroll pb-7 hidden xl:block">
      <div className="">
        <img src={banner} alt="Banner" className="h-25 w-full" />
        <div className=" flex flex-col  items-center w-full mb-5 ">
          <img src={avatar} alt="" className="h-16 w-16 rounded-full -mt-7" />
          <p className="text-xl text-[#468540]">John Doe</p>
        </div>
        <SideLink text="Overview" svg={eye} />
        <SideLink text="Profile" svg={profile} />
        <SideLink text="My Projects" svg={project} />
        <SideLink text="My Fundings" svg={funding} />
        <SideLink text="My Payments" svg={payments} />
        <SideLink text="Wallet" svg={wallet} />
        <SideLink text="Withdrawals" svg={withdrawal} />
        <SideLink text="Referrals " svg={referral} />
        <SideLink text="Settings " svg={settings} />
        <div className="flex justify-evenly items-center mt-5 mb-1">
          <p>+233572260481 </p>
          <p>|</p>
        </div>
        <p className="text-center">info@kwidex.com</p>
        <div className="h-[1.6px] my-7 bg-[#d5d5d5]" />
        <div className="flex justify-evenly text-gray-500">
          <p>About</p>
          <p>Contact</p>
          <p>Press</p>
          <p>Privacy</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

const SideLink = ({ text, svg }) => (
  <div className="flex items-center ml-5 my-3">
    <img
      src={svg}
      alt=""
      className="bg-[#D0E4D6] p-2 rounded-full mr-5 
    w-[35px] h-[35px] "
    />
    <p>{text}</p>
  </div>
);
