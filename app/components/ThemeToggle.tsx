"use client";
import { useEffect, useState } from "react";
import { BsMoonStars } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  // useEffect(() => {
  //   const theme = localStorage.getItem("theme");
  //   if (theme === "dark") setDarkMode(true);
  // }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      // localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      // localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="relative  w-20  h-8 flex items-center bg-gray-200/90 dark:bg-gray-300/50 cursor-pointer rounded-md p-1 transition-colors "
      onClick={() => setDarkMode(!darkMode)}
    >
      <MdOutlineWbSunny className=" text-gray-800" size={21} />

      <div
        className="absolute bg-white w-6 h-6 rounded-md shadow-md transform duration-1000"
        style={{
          left: darkMode ? "4px" : "52px",
          transition: "left 0.3s cubic-bezier(0, 0, 0.05, 0.99) 0s",
        }}
      ></div>
      <BsMoonStars className="ml-auto text-gray-800" size={18} />
    </div>
  );
};

export default ThemeToggle;
