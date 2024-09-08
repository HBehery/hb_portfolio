"use client";

import React, { useRef } from "react";
import NavBar from "./components/NavBar";
import { Inter } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
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
        id="nav_bar"
        className="flex w-full fixed top-0 z-50"
        style={{ y: navY }}
      >
        <NavBar />
      </motion.div>

      <div id="home_page" className="mt-[20%] lg:mt-12">
        <div
          id="hello_section"
          ref={ref}
          className={`${montserrat.className} text-gray-900 dark:text-white relative flex flex-col lg:flex-row justify-center text-center items-center transition-colors w-full h-[200vh] py-24 pt-16 lg:pt-6 z-40`}
        >
          {/* Left side Hello Text */}
          <div
            id="text_container"
            className="flex flex-col items-center justify-center w-full lg:w-[90%] h-[50vh] pt-48 lg:sticky self-start lg:top-[15%] lg:pl-5"
          >
            <h1 className="font-extrabold text-[45px] max-[400px]:text-4xl md:text-6xl  xl:text-7xl z-30 py-5 sm:mx-0 ">
              Hi, I&apos;m Hamzah.
            </h1>
            <p className="text-md max-[400px]:text-sm sm:text-lg md:text-xl max-[400px]:max-w-[70%] z-10">
              Your favourite developer's favourite developer
            </p>
            {/* Overview Sections row */}
            <div
              id="icons_row"
              className="flex flex-row w-full justify-center py-8 sm:space-x-[30px] space-x-12 transition-all max-[400px]:text-[14px]"
            >
              <div className="text-rose-500 hover:text-rose-300 dark:text-indigo-400 dark:hover:text-indigo-300 font-extrabold sm:max-w-full max-w-[18%]">
                <p>
                  01<span className="mx-2">——</span>About
                </p>
              </div>
              <div className="text-rose-500 hover:text-rose-300 dark:text-indigo-400 dark:hover:text-indigo-300 font-extrabold sm:max-w-full max-w-[20%] ">
                <p>
                  02<span className="mx-2">——</span>Experience
                </p>
              </div>
              <div className="text-rose-500 hover:text-rose-300 dark:text-indigo-400 dark:hover:text-indigo-300 font-extrabold sm:max-w-full max-w-[20%]">
                <p>
                  03<span className="mx-2">——</span>Education
                </p>
              </div>
            </div>
          </div>

          {/* Overview Paragraphs */}
          <div className="flex flex-col space-y-10 w-full h-full transition-all relative top-[5vh] lg:top-[10vh] items-center right-0 xl:right-[2vw]">
            <div className="h-[33vh] w-[80%] lg:w-[90%] bg-slate-400/10 dark:bg-zinc-600/10 backdrop-blur-md dark:text-black text-white"></div>
            <div className="h-[66vh] w-[80%] lg:w-[90%] bg-slate-400/10 dark:bg-zinc-600/10 backdrop-blur-md dark:text-black text-white"></div>
            <div className="h-[66vh] w-[80%] lg:w-[90%] bg-slate-400/10 dark:bg-zinc-600/10 backdrop-blur-md dark:text-black text-white"></div>
          </div>

          {/* Stars container to control overflow */}
          <div className="absolute inset-0 w-full h-full overflow-hidden z-[-1]">
            {/* Stars */}
            <motion.div
              style={{ y: backgroundY }}
              className="absolute w-[2000px] h-[200vh] flex justify-end"
            >
              <img
                className="dark:brightness-100 brightness-0"
                src="stars2.svg"
              />
            </motion.div>
            <motion.div
              style={{ y: backgroundY2 }}
              className="absolute w-[2000px] h-[200vh] flex justify-end"
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
        <div id="footer" className="h-[33vh] bg-black/90 dark:bg-black/70  ">
          <div
            id="footer_container"
            className="flex align-middle justify-left items-center h-full w-full px-4 sm:px-10 lg:px-20 xl:px-24 "
          >
            <div id="image_container" className="relative w-[200px] h-[75%]">
              <Image
                src={`/face_card.png`}
                alt="My Face Card"
                fill
                className="object-cover"
              />
            </div>
            <div
              id="text container"
              className="dark:text-gray-100 flex flex-col justify-left px-6 space-y-8"
            >
              <div className="text-2xl sm:text-4xl max-[470px]:text-xl">
                <h1 id="Title" className="font-custom">
                  MADE BY: HAMZAH BEHERY
                </h1>
                <h1
                  id="Subtitle"
                  className="font-custom dark:text-indigo-400 text-rose-500"
                >
                  REACH ME AT:
                </h1>
                <p
                  id="Subtitle"
                  className="text-xl sm:text-2xl font-custom relative bottom-0"
                >
                  <a
                    href="mailto:hamzahbehery@gmail.com"
                    className="hover:underline"
                  >
                    hamzahbehery@gmail.com
                  </a>
                </p>
              </div>
              <p className="text-[10px] text-md sm:text-[16px]">
                <a
                  href="https://github.com/HBehery/hb_portfolio"
                  className="underline"
                >
                  CHECKOUT THE REPO
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
