import React from "react";
import logo from "../assets/LoginSvgs/white-logo.svg";
import home from "../assets/HomeSvgs/home.svg";
import wallet from "../assets/HomeSvgs/wallet.svg";
import plus from "../assets/HomeSvgs/plus-w.svg";
import project from "../assets/HomeSvgs/project.svg";
import avatar from "../assets/HomeSvgs/avatar.svg";
import notification from "../assets/HomeSvgs/notification.svg";

const Navbar = ({ setMiniSideOpen }) => {
  return (
    <div
      className="h-[8.5vh] bg-[#005C59] sticky top-0 flex
    px-2 items-center justify-between text-white"
    >
      <img src={logo} alt="Kwidex Logo" width="80" height="80" />

      <div className="flex  w-[65vw] xl:w-[55vw]">
        <div className="justify-between flex-[4] lg:flex hidden">
          <NavLink text="Home" svg={home} />
          <NavLink text="Projects" svg={project} />
          <NavLink text="Create New Project" svg={plus} />
          <NavLink text="Wallet" svg={wallet} />
        </div>
        <div className="flex justify-end lg:justify-evenly lg:pl-3 flex-1 items-center">
          <img
            src={notification}
            alt=""
            className="w-[20px] h-[20px] hidden lg:block "
          />
          <img
            src={plus}
            alt=""
            className="w-[25px] h-[25px] block mr-6 lg:hidden "
          />

          <img
            src={avatar}
            alt=""
            className="h-[32px] w-[32px] rounded-full cursor-pointer  "
            onClick={() => setMiniSideOpen(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const NavLink = ({ text, svg }) => (
  <div className=" items-center md:flex hidden">
    <img src={svg} alt="" className=" mr-2 w-[20px] h-[20px] " />
    <p>{text}</p>
  </div>
);
