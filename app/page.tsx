"use client";

import React, { useRef } from "react";
import NavBar from "./components/NavBar";
import { Inter } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import ProjectsPage from "./components/Projects";
import Link from "next/link";

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
      <div className="min-[700px]:hidden">
        <NavBar />
      </div>
      {/* Navbar with scroll animation */}
      <motion.div
        id="nav_bar"
        className="flex w-full fixed top-0 z-50"
        style={{ y: navY }}
      >
        <NavBar />
      </motion.div>

      <div id="home_page" className="mt-[1%] lg:mt-12">
        <div
          id="hello_section"
          ref={ref}
          className={`${montserrat.className} text-gray-900 dark:text-white relative flex flex-col lg:flex-row justify-center text-center items-center transition-colors w-full py-24 pt-16 lg:pt-6 z-40`}
        >
          {/* Left side Hello Text */}
          <div
            id="text_container"
            className="flex flex-col items-center justify-center w-full lg:w-[90%] h-[50vh] pt-48 lg:sticky self-start lg:top-[15%] lg:pl-5"
          >
            <h1 className="font-extrabold text-[45px] max-[400px]:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl z-30 py-5 sm:mx-0 ">
              Hi, I&apos;m Hamzah.
            </h1>
            <p className="text-md max-[400px]:text-sm sm:text-lg md:text-xl max-[400px]:max-w-[70%] z-10">
              Your favourite developer&apos;s favourite developer
            </p>
            {/* Overview Sections row */}
            <div
              id="icons_row"
              className="flex flex-row w-full justify-center py-8 sm:space-x-[30px] space-x-12 transition-all max-[400px]:text-[14px] xl:text-[18px] lg:text-[16px]"
            >
              <div
                className="text-rose-500 hover:text-rose-300 dark:text-indigo-400 dark:hover:text-indigo-300 font-extrabold sm:max-w-full max-w-[18%] cursor-pointer"
                onClick={() => {
                  const element = document.getElementById("about");
                  if (element) {
                    const top =
                      element.getBoundingClientRect().top +
                      window.scrollY -
                      120;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
              >
                <p>
                  01<span className="mx-2">——</span>About
                </p>
              </div>
              <div
                className="text-rose-500 hover:text-rose-300 dark:text-indigo-400 dark:hover:text-indigo-300 font-extrabold sm:max-w-full max-w-[20%] cursor-pointer"
                onClick={() => {
                  const element = document.getElementById("experience");
                  if (element) {
                    const top =
                      element.getBoundingClientRect().top +
                      window.scrollY -
                      120;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
              >
                <p>
                  02<span className="mx-2">——</span>Experience
                </p>
              </div>
              <div
                className="text-rose-500 hover:text-rose-300 dark:text-indigo-400 dark:hover:text-indigo-300 font-extrabold sm:max-w-full max-w-[20%] cursor-pointer"
                onClick={() => {
                  const element = document.getElementById("projects");
                  if (element) {
                    const top =
                      element.getBoundingClientRect().top +
                      window.scrollY -
                      120;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
              >
                <p>
                  03<span className="mx-2">——</span>Projects
                </p>
              </div>
            </div>
          </div>

          {/* Overview Paragraphs */}
          <div className="flex flex-col space-y-6 w-full  relative top-[5vh] lg:top-[10vh] items-center right-0 xl:right-[2vw]">
            <div className="text-left font-extrabold text-4xl w-[90%] sm:w-[80%] lg:w-[90%] pt-5">
              <h1 id="about"> ABOUT </h1>
            </div>
            <div className="flex flex-col text-sm sm:text-[16px] overflow-hidden items-start w-[90%] sm:w-[80%] lg:w-[90%] bg-slate-400/10 dark:bg-zinc-600/10 backdrop-blur-md dark:text-white text-gray-900 py-5 px-6 max-[450px]:px-2">
              <h1 className="font-extrabold text-2xl sm:text-3xl text-left">
                Welcome to my Personal Portfolio!
              </h1>
              <div className="flex flex-col text-left pl-4 justify-between h-full pt-6 pb-3">
                <p>
                  I am a fullstack software developer based in Toronto, Ontario.
                  I will be graduating from the
                  <span className="text-rose-500 dark:text-indigo-400 font-extrabold">
                    &nbsp;University of Toronto&nbsp;
                  </span>
                  as a&nbsp;
                  <a
                    className="underline"
                    href="https://future.utoronto.ca/scholarships/presidents-scholars-of-excellence-program/"
                  >
                    President&apos;s Scholar of Excellence
                  </a>
                  &nbsp;by December 2024. Here are some of my technical skills:
                </p>
                <ul className="list-disc list-inside text-left pl-4 sm:pl-4 xl:pl-6 py-4 space-y-2">
                  <li style={{ textIndent: "-1.5em" }}>
                    <span className="font-extrabold">Languages:</span>{" "}
                    Javascript, CSS, Python, SQL, HTML5
                  </li>
                  <li style={{ textIndent: "-1.5em" }}>
                    <span className="font-extrabold">
                      Fullstack Development:
                    </span>{" "}
                    TypeScript, React, Next.JS, TailwindCSS, Node.JS, Flask
                  </li>
                  <li style={{ textIndent: "-1.5em" }}>
                    <span className="font-extrabold">Other Tools:</span> Git,
                    Docker, Postman, PyTorch, TensorFlow
                  </li>
                </ul>
                <p className="">
                  Outside of my career, I am a youth mentor, bodybuilder, and
                  GFX/VFX designer (
                  <span className="text-rose-500 dark:text-indigo-400 underline font-extrabold">
                    images coming soon
                  </span>
                  ).
                </p>
              </div>
            </div>
            <div className="text-left font-extrabold text-4xl w-[90%] sm:w-[80%] lg:w-[90%] pt-5">
              <h1 id="experience"> EXPERIENCE </h1>
            </div>
            <div className="flex flex-col justify-between text-sm  sm:text-[16px] space-y-4 overflow-hidden items-start w-[90%] sm:w-[80%] lg:w-[90%] bg-slate-400/10 dark:bg-zinc-600/10 backdrop-blur-md dark:text-white text-gray-900 py-5 px-6 max-[450px]:px-2">
              <div id="TriSpects Inc.">
                <h1 className="text-left font-extrabold text-2xl sm:text-3xl">
                  <a href="https://trispects.com" className="hover:underline">
                    TriSpects Inc.
                  </a>
                </h1>
                <div className="flex flex-row text-gray-500 dark:text-gray-300 sm:pl-4 pl-2 text-left">
                  <p className="text-rose-500 dark:text-indigo-400 font-extrabold">
                    Fullstack Software Developer
                  </p>
                  <p className="max-[500px]:hidden">
                    &nbsp;• Sep 2023 - Jan 2024
                  </p>
                </div>
                <ul className="list-disc list-inside text-left pl-4 sm:pl-4 xl:pl-12 pt-4 space-y-4 ">
                  <li style={{ textIndent: "-1.5em" }}>
                    Fully developed 10+ page company{" "}
                    <a href="https://trispects.com" className="underline">
                      website
                    </a>{" "}
                    using native HTML/CSS/JavaScript, Bootstrap, and CSS asset
                    libraries to ensure a <b>100% responsive design</b> and
                    seamless user experience across all devices.
                  </li>
                  <li style={{ textIndent: "-1.5em" }}>
                    Fully engineered the website backend architecture and
                    RESTful API using a Python Django framework (Wagtail),
                    enabling seamless frontend to backend integration.
                  </li>
                  <li style={{ textIndent: "-1.5em" }}>
                    Implemented dynamic elements through advanced JavaScript DOM
                    manipulation and facilitated form submissions while adhering
                    to WCAG 2.1 standards, ensuring a seamless experience for
                    <b> 2.6+ million users</b>.
                  </li>
                </ul>
              </div>
              <div id="SIRTTS" className="pb-2">
                <h1 className="font-extrabold text-2xl sm:text-3xl text-left">
                  SIRTTS Inc.
                </h1>
                <div className="flex flex-row text-gray-500 dark:text-gray-300 sm:text-md sm:pl-4 pl-2 text-left">
                  <p className="text-rose-500 dark:text-indigo-400 font-extrabold">
                    Fullstack Software Developer
                  </p>
                  <p className="max-[500px]:hidden">
                    &nbsp;• May 2023 - Sep 2023
                  </p>
                </div>
                <ul className="list-disc list-inside text-left pl-4 sm:pl-4 xl:pl-12 pt-4 space-y-4 text-[15px]">
                  <li style={{ textIndent: "-1.5em" }}>
                    Implemented two pre-trained AI models to create a tool
                    (Flutter/Python) which summarizes corporate group chat
                    messages into action items, for use by a K-12 school staff
                    team housing <b>2000+ students</b>.
                  </li>
                  <li style={{ textIndent: "-1.5em" }}>
                    Built an application (Flutter/Python) optimizing appointment
                    setting process used by{" "}
                    <b>1.7+ million Reliance Home Comfort </b>
                    customers in Canada. Used Flask Python library to engineer a
                    RESTful API to communicate suitable appointment dates
                    between the frontend and backend based on customer needs.
                  </li>
                  <li style={{ textIndent: "-1.5em" }}>
                    Developed a strategic plan to leverage AI NLP solutions,
                    including PyTorch, for future integration into the company’s
                    existing technologies to enhance data processing and
                    automation capabilities.
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-left font-extrabold text-4xl hover:underline w-[90%] sm:w-[80%] lg:w-[90%] pt-5">
              <Link href="/projects">
                <h1 id="projects">PROJECTS</h1>
              </Link>
            </div>
            <div className="flex flex-col overflow-hidden text-sm sm:text-[16px] justify-between space-y-2 items-start w-[90%] sm:w-[80%] lg:w-[90%] bg-slate-400/10 dark:bg-zinc-600/10 backdrop-blur-md dark:text-white text-gray-900 py-6 px-6 max-[450px]:px-2">
              <div className="pb-2">
                <h1 className="font-extrabold text-2xl text-left">
                  <a
                    href="https://github.com/HBehery/realityquest"
                    className="hover:underline"
                  >
                    MAC Reality Quest
                  </a>
                </h1>
                <div className="flex flex-row text-gray-500 dark:text-gray-300 sm:pl-4 pl-2">
                  <p className="text-rose-500 dark:text-indigo-400 font-extrabold">
                    TypeScript, Next.JS, TailwindCSS, MySQL
                  </p>
                </div>
                <ul className="list-disc list-inside text-left pl-4 sm:pl-4 xl:pl-12 space-y-4 text-[15px]">
                  <li style={{ textIndent: "-1.5em" }}>
                    Online scavenger hunt game with 150+ concurrent users at
                    peak operation times.
                  </li>
                </ul>
              </div>
              <div className="pb-2">
                <h1 className="font-extrabold text-2xl text-left">
                  <a
                    href="https://github.com/HBehery/AegisLock-AI-Password-Manager"
                    className="hover:underline"
                  >
                    AI Password Manager
                  </a>
                </h1>
                <div className="flex flex-row text-gray-500 dark:text-gray-300 sm:pl-4 pl-2">
                  <p className="text-rose-500 dark:text-indigo-400 font-extrabold">
                    Python + Tkinter
                  </p>
                </div>
                <ul className="list-disc list-inside text-left pl-4 sm:pl-4 xl:pl-12 space-y-4 text-[15px]">
                  <li style={{ textIndent: "-1.5em" }}>
                    Password manager utilizing a fine-tuned version of
                    Microsoft&apos;s CodeBERT-base model
                  </li>
                </ul>
              </div>
              <div className="pb-2">
                <h1 className="font-extrabold text-2xl text-left">
                  <a
                    href="https://github.com/HBehery/Post-Secondary-Guidance"
                    className="hover:underline"
                  >
                    Post Secondary Guidance
                  </a>
                </h1>
                <div className="flex flex-row text-gray-500 dark:text-gray-300 sm:pl-4 pl-2">
                  <p className="text-rose-500 dark:text-indigo-400 font-extrabold">
                    Python + Tkinter
                  </p>
                </div>
                <ul className="list-disc list-inside text-left pl-4 sm:pl-4 xl:pl-12 space-y-4 text-[15px]">
                  <li style={{ textIndent: "-1.5em" }}>
                    Provides users with the ideal Canadian universities to apply
                    to depending on questionnaire results
                  </li>
                </ul>
              </div>
              <div className="pb-2">
                <h1 className="font-extrabold text-2xl text-left">
                  <a
                    href="https://github.com/HBehery/hb_portfolio"
                    className="hover:underline"
                  >
                    Website Portfolio
                  </a>
                </h1>
                <div className="flex flex-row text-gray-500 dark:text-gray-300 sm:pl-4 pl-2">
                  <p className="text-rose-500 dark:text-indigo-400 font-extrabold">
                    TypeScript, Next.JS, TailwindCSS
                  </p>
                </div>
                <ul className="list-disc list-inside text-left pl-4 sm:pl-4 xl:pl-12 space-y-4 text-[15px]">
                  <li style={{ textIndent: "-1.5em" }}>
                    This website! Makes use of React libraries such as
                    Framer-Motion to produce a seamless portfolio.
                  </li>
                </ul>
              </div>
              <div className="pb-2">
                <h1 className="font-extrabold text-xl sm:text-2xl text-left">
                  + More (
                  <a href="https://github.com/HBehery" className="underline">
                    Visit GitHub Profile
                  </a>
                  )
                </h1>
              </div>
            </div>
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
                src="stars1.svg"
              />
            </motion.div>
            <motion.div
              style={{ y: backgroundY2 }}
              className="absolute w-[2000px] h-[200vh] flex justify-end"
            >
              <img
                className="dark:brightness-100 brightness-0"
                src="stars2.svg"
              />
            </motion.div>
          </div>
        </div>

        {/* Projects Section */}
        <div ref={projectsRef} className="max-[700px]:hidden">
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
              <div className="text-xl md:text-2xl max-[470px]:text-lg">
                <h1 id="Title" className="">
                  MADE BY: HAMZAH BEHERY
                </h1>
                <h1
                  id="Subtitle"
                  className="dark:text-indigo-400 text-rose-500"
                >
                  REACH ME AT:
                </h1>
                <p
                  id="Subtitle"
                  className="text-sm sm:text-[16px] relative bottom-0"
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
                  href="https://www.linkedin.com/in/hamzah-behery/"
                  className="underline"
                >
                  LinkedIn Profile
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
