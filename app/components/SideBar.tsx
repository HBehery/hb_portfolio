"use client";
import React from "react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import ThemeToggle from "./ThemeToggle";

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex space-x-5 items-center">
      <ThemeToggle />
      <button
        className="relative flex items-center justify-center p-2 rounded-md bg-transparent overflow-hidden group"
        aria-label="Sidebar Hamburger Button"
      >
        {/* Hamburger Icon */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        <RxHamburgerMenu
          className="relative  z-10"
          size={26}
          onClick={toggleSidebar}
        />
      </button>
    </div>
  );
};

export default SideBar;
