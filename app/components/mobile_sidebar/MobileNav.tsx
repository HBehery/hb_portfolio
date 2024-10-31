"use client";
import React from "react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import ThemeToggle from "../navbar/ThemeToggle";
import SideBar from "./menu/SideBar";

const MobileNav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="items-center space-x-8 px-3 hidden">
        <ThemeToggle />
        <button
          className="relative items-center justify-center p-2 rounded-md bg-transparent overflow-hidden group"
          aria-label="Sidebar Hamburger Button"
          onClick={toggleSidebar}
        >
          {/* Hamburger Icon */}
          <div className="absolute inset-0  bg-gradient-to-br from-rose-500 to-yellow-200 dark:from-indigo-500 dark:to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          <RxHamburgerMenu className="relative  z-10" size={26} />
        </button>
      </div>
      <div className={`${isSidebarOpen ? "hidden" : "hidden"}`}>
        <SideBar />
      </div>
    </div>
  );
};

export default MobileNav;
