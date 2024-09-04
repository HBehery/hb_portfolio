import React from "react";
import NavBar from "./components/NavBar";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "800"],
});

const montserrat = Inter({
  subsets: ["latin"],
  weight: ["400", "800"],
});

const HomePage = () => {
  return (
    <div>
      <div
        className={`${montserrat.className} text-gray-800 dark:text-white relative flex flex-col justify-center text-center transition-colors w-full h-screen py-24 pt-6`}
      >
        <h1 className="font-extrabold text-5xl sm:text-6xl md:text-7xl z-10 py-5">
          Hi, I&apos;m Hamzah.
        </h1>
        <p className="text-md sm:text-lg md:text-xl z-10">Coming soon.</p>
      </div>
      <div className="opacity-100">
        <NavBar />
      </div>
    </div>
  );
};

export default HomePage;
