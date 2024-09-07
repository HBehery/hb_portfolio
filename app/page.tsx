"use client";

import React, { useRef } from "react";
import NavBar from "./components/NavBar";
import { Inter } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import { Montserrat } from "next/font/google";
import ProjectsPage from "./components/Projects";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "800"],
});

const montserrat = Inter({
  subsets: ["latin"],
  weight: ["400", "800"],
});

const HomePage = () => {
  const ref = useRef(null); // For tracking scroll within the HelloSection
  const projectsRef = useRef(null); // For tracking ProjectsPage

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: projectsScrollProgress } = useScroll({
    target: projectsRef,
    offset: ["start start", "end start"],
  });

  // Transforms for navbar movement
  const navY = useTransform(projectsScrollProgress, [0, 0.1], ["0%", "-100%"]);

  // Background transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <div>
      {/* Navbar with scroll animation */}
      <motion.div
        id="NavBar"
        className="flex w-full fixed top-0 z-50"
        style={{ y: navY }}
      >
        <NavBar />
      </motion.div>

      <div id="HomePage" className="mt-[40px]">
        <div
          id="HelloSection"
          ref={ref}
          className={`${montserrat.className} text-gray-800 dark:text-white relative flex flex-row justify-center text-center items-center transition-colors w-full h-[200vh] py-24 pt-6 z-40`}
        >
          {/* Text */}
          <div
            id="TextContainer"
            className="flex flex-col items-center justify-center w-[90%] h-[50vh] sticky self-start top-[15%] pl-5"
          >
            <h1 className="font-extrabold text-4xl sm:text-6xl md:text-7xl z-30 py-5">
              Hi, I&apos;m Hamzah.
            </h1>
            <p className="text-md sm:text-lg md:text-xl z-10">
              Your favourite developer's favourite developer
            </p>
            <div
              id="iconsRow"
              className="flex flex-row w-full justify-center py-8 sm:space-x-[30px] space-x-1 transition-all"
            >
              <div className="text-orange-300 hover:text-orange-200 dark:text-indigo-400 dark:hover:text-indigo-300 font-extrabold">
                <p>
                  01<span className="mx-2">——</span>About
                </p>
              </div>
              <div className="text-orange-300 hover:text-orange-200 dark:text-indigo-400 dark:hover:text-indigo-300 font-extrabold">
                <p>
                  02<span className="mx-2">——</span>Experience
                </p>
              </div>
              <div className="text-orange-300 hover:text-orange-200 dark:text-indigo-400 dark:hover:text-indigo-300 font-extrabold">
                <p>
                  03<span className="mx-2">——</span>Education
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-10 w-full h-full transition-all relative top-[10vh] items-center right-[3vw]">
            <div className="h-[33vh] w-[75%] bg-gray-200/50 dark:bg-zinc-600/10 backdrop-blur-md dark:text-black text-white"></div>
            <div className="h-[66vh] w-[75%] bg-gray-200/50 dark:bg-zinc-600/10 backdrop-blur-md dark:text-black text-white"></div>
            <div className="h-[66vh] w-[75%] bg-gray-200/50 dark:bg-zinc-600/10 backdrop-blur-md dark:text-black text-white"></div>
          </div>

          {/* Stars container to control overflow */}
          <div className="absolute inset-0 w-full h-full overflow-hidden z-[-1]">
            {/* Stars */}
            <motion.div
              style={{ y: backgroundY }}
              className="absolute w-[2000px] xl:w-100vh h-[200vh] flex justify-end"
            >
              <img
                className="dark:brightness-100 brightness-0"
                src="stars2.svg"
              />
            </motion.div>
            <motion.div
              style={{ y: backgroundY2 }}
              className="absolute w-[2000px] xl:w-100vh h-[200vh] flex justify-end"
            >
              <img
                className="dark:brightness-100 brightness-0"
                src="stars5.svg"
              />
            </motion.div>
          </div>
        </div>

        {/* Projects Section */}
        <div ref={projectsRef}>
          <ProjectsPage />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
