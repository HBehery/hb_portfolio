"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { SlHome } from "react-icons/sl";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithubAlt } from "react-icons/vsc";
import { GrProjects } from "react-icons/gr";
import { IoNewspaperOutline } from "react-icons/io5";

import FontToggle from "./FontToggle";
import MobileNav from "../mobile_sidebar/MobileNav";

const NavBar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const projectsPage = document.getElementById("projects_page");
      const navBar = document.getElementById("navbar");
      if (projectsPage && navBar) {
        const rect = projectsPage.getBoundingClientRect();
        if (rect.top <= -65 && rect.bottom >= 0) {
          navBar.style.transform = "translateY(-100%)";
        } else {
          navBar.style.transform = "translateY(0)";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="navbar"
      className={`flex w-full top-0 py-6 px-0 z-50 sticky
      min-[400px]:px-5 bg-gray-200/5 dark:bg-black/5 backdrop-blur-md transition-all duration-300 text-stone-800 dark:text-white`}
    >
      <div className="hidden">
        <FontToggle />
      </div>

      {/* ICONS */}
      {/* Home Icon */}
      <div className="flex rounded-md py-2 px-2 space-x-4 align-middle items-center w-full justify-between sm:justify-normal">
        <button
          className="relative flex items-center justify-center p-2 rounded-md bg-transparent overflow-hidden group"
          aria-label="HomePage Button"
        >
          <Link href="/">
            {/*  dark:from-indigo-500 dark:to-teal-500 */}
            <div className="absolute inset-0 bg-gradient-to-br from-grad1light to-grad2light dark:from-grad1dark dark:to-grad2dark opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>

            <SlHome className="relative  z-10" size={24} />
          </Link>
        </button>
        <div className="w-px x h-6 bg-gray-300"></div>{" "}
        {/* Vertical Separator */}
        {/* LinkedIn Icon */}
        <button
          className="relative flex items-center justify-center p-2 rounded-md bg-transparent overflow-hidden group"
          aria-label="LinkedIn Profile Button"
        >
          <a
            href="https://www.linkedin.com/in/hamzah-behery/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-grad1light to-grad2light dark:from-grad1dark dark:to-grad2dark opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>

            <AiOutlineLinkedin className="relative  z-10" size={24} />
          </a>
        </button>
        {/* GitHub Icon */}
        <button
          className="relative flex items-center justify-center p-2 rounded-md bg-transparent overflow-hidden group"
          aria-label="Visit GitHub Profile"
        >
          <a
            href="https://github.com/HBehery"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-grad1light to-grad2light dark:from-grad1dark dark:to-grad2dark opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>

            <VscGithubAlt className="relative  z-10" size={24} />
          </a>
        </button>
        <div className="w-px h-6 bg-gray-300" /> {/* Vertical Separator */}
        {/* Blog Icon */}
        <button
          className="relative flex items-center justify-center p-2 rounded-md bg-transparent overflow-hidden group"
          aria-label="Visit Blog Page"
        >
          <Link href="/blog">
            <div className="absolute inset-0 bg-gradient-to-br from-grad1light to-grad2light dark:from-grad1dark dark:to-grad2dark opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>

            <GrProjects className="relative z-10" size={21} />
          </Link>
        </button>
        {/* Resume Icon */}
        <button
          className="relative flex items-center justify-center p-2 rounded-md bg-transparent overflow-hidden group"
          aria-label="Resume Page Button"
        >
          <a
            href="/assets/Resume-HamzahBehery.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-grad1light to-grad2light dark:from-grad1dark dark:to-grad2dark opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>

            <IoNewspaperOutline className="relative z-10" size={25} />
          </a>
        </button>
        <div className="w-px h-6 bg-gray-300" /> {/* Vertical Separator */}
        <div className="sm:p-2">
          <ThemeToggle />
        </div>
      </div>

      {/* SIDEBAR */}
      <div className="hidden items-center ml-auto">
        <div className="">
          <MobileNav />
        </div>
      </div>
      <div className="hidden sm:flex">
        <FontToggle />
      </div>
    </div>
  );
};

export default NavBar;
