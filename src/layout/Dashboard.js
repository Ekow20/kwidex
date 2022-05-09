import React, { useState } from "react";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import BottomNav from "./BottomNav";
import MiniSidebar from "./MiniSidebar";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [miniSideOpen, setMiniSideOpen] = useState(false);
  return (
    <>
      <Navbar setMiniSideOpen={setMiniSideOpen} />
      <div className="flex h-[91.5vh] z-10">
        <Sidebar />
        <div className="flex-[3.9] " onClick={() => setMiniSideOpen(false)}>
          <MiniSidebar open={miniSideOpen} />
          <Settings />
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default Dashboard;
