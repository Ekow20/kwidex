import React from "react";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import BottomNav from "./BottomNav";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-[91.5vh]">
        <Sidebar />
        <div className="flex-[3.9] ">
          <Settings />
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default Dashboard;
