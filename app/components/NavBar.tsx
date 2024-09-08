import React from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { SlHome } from "react-icons/sl";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithubAlt } from "react-icons/vsc";
import { GrProjects } from "react-icons/gr";
import { IoNewspaperOutline } from "react-icons/io5";

import FontToggle from "./FontToggle";
import SideBar from "./SideBar";

const NavBar = () => {
  return (
    <div className="flex w-full top-0 py-6 px-5 bg-gray-200/5 dark:bg-black/5 backdrop-blur-md transition-colors text-gray-800 dark:text-white">
      <div className="flex sm:hidden">
        <FontToggle />
      </div>

      {/* ICONS */}
      <div className="sm:flex hidden rounded-md py-2 px-2 space-x-4 align-middle items-center w-full">
        <button
          className="relative flex items-center justify-center p-2 rounded-md bg-transparent overflow-hidden group"
          aria-label="HomePage Button"
        >
          {/* Home Icon */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-yellow-200 dark:from-indigo-500 dark:to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          <Link href="/">
            <SlHome className="relative  z-10" size={23} />
          </Link>
        </button>
        <div className="w-px x h-6 bg-gray-300"></div>{" "}
        {/* Vertical Separator */}
        <button
          className="relative flex items-center justify-center p-2 rounded-md bg-transparent overflow-hidden group"
          aria-label="LinkedIn Profile Button"
        >
          {/* LinkedIn Icon */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-yellow-200 dark:from-indigo-500 dark:to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          <a href="https://www.linkedin.com/in/hamzah-behery/">
            <AiOutlineLinkedin className="relative  z-10" size={23} />
          </a>
        </button>
        <button
          className="relative flex items-center justify-center p-2 rounded-md bg-transparent overflow-hidden group"
          aria-label="GitHub Profile Button"
        >
          {/* GitHub Icon */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-yellow-200 dark:from-indigo-500 dark:to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          <a href="https://github.com/HBehery">
            <VscGithubAlt className="relative  z-10" size={23} />
          </a>
        </button>
        <div className="w-px h-6 bg-gray-300"></div> {/* Vertical Separator */}
        <button
          className="relative flex items-center justify-center p-2 rounded-md bg-transparent overflow-hidden group"
          aria-label="Projects Page Button"
        >
          {/* Projects Icon */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-yellow-200 dark:from-indigo-500 dark:to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          <Link href="/projects">
            <GrProjects className="relative z-10" size={20} />
          </Link>
        </button>
        <button
          className="relative flex items-center justify-center p-2 rounded-md bg-transparent overflow-hidden group"
          aria-label="Resume Page Button"
        >
          {/* Resume Icon */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-yellow-200 dark:from-indigo-500 dark:to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          <a href="/Resume-Hamzah_Behery.pdf" download>
            <IoNewspaperOutline className="relative z-10" size={25} />
          </a>
        </button>
        <div className="w-px h-6 bg-gray-300"></div> {/* Vertical Separator */}
        <div className="p-2">
          <ThemeToggle />
        </div>
      </div>

      <div className="flex items-center ml-auto">
        {/* SIDEBAR */}
        <div className="flex sm:hidden px-7">
          <SideBar />
        </div>
        <div className="sm:flex hidden">
          <FontToggle />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
