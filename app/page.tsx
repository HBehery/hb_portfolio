"use client";

import React, { useRef } from "react";
import NavBar from "./components/NavBar";
import { Inter } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import ProjectsPage from "./components/Projects";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "800"],
});

const montserrat = Inter({
  subsets: ["latin"],
  weight: ["400", "800"],
});

const links = [];

const HomePage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <div>
      <div
        ref={ref}
        className={`${montserrat.className} text-gray-800 dark:text-white relative flex flex-col justify-center text-center transition-colors w-full h-screen py-24 pt-6 z-40`}
      >
        {/* Text */}
        <motion.div
          style={{ y: textY }}
          className="flex flex-col items-center relative left-0 w-3/5 h-[50vh] justify-end"
        >
          <h1 className="font-extrabold text-4xl sm:text-6xl md:text-7xl z-30 py-5 w-3/5 ">
            Hi, I&apos;m Hamzah.
          </h1>
          <p className="text-md sm:text-lg md:text-xl z-10">Coming soon.</p>
        </motion.div>
        {/* Stars */}
        <motion.div
          style={{ y: backgroundY }}
          className="inset-0 absolute z-[-10] h-[200vh] flex justify-end"
        >
          <img className=" dark:brightness-100 brightness-0" src="stars.svg" />
        </motion.div>
      </div>
      <div className="opacity-100"></div>

      <ProjectsPage />
    </div>
  );
};

export default HomePage;
