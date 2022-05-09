import React from "react";
import home from "../assets/HomeSvgs/home-g.svg";
import wallet from "../assets/HomeSvgs/wallet-b.svg";
import referral from "../assets/HomeSvgs/referral-b.svg";
import notification from "../assets/HomeSvgs/notification-b.svg";
import profile from "../assets/HomeSvgs/profile-b.svg";

const BottomNav = () => {
  return (
    <div
      className="bg-white border-t-2 border-t-[#d5d5d5] absolute bottom-0 h-fit w-screen
  flex items-center justify-evenly py-1 sm:hidden "
    >
      <NavLink text="Home" svg={home} />
      <NavLink text="Wallet" svg={wallet} />
      <NavLink text="Referrals" svg={referral} />
      <NavLink text="Notifications" svg={notification} />
      <NavLink text="Profile" svg={profile} />
    </div>
  );
};

export default BottomNav;

const NavLink = ({ text, svg }) => (
  <div className="flex flex-col items-center">
    <img src={svg} alt="" className=" w-[20px] h-[20px] " />
    <p className="text-xs ">{text}</p>
  </div>
);
