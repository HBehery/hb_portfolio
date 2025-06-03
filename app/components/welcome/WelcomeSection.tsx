"use client";

import React, { useRef } from "react";
import { Inter } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "800"],
});

const WelcomeSection = () => {
  const ref = useRef(null); // For tracking scroll within the HelloSection

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Background transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <div
      id="hello_section"
      ref={ref}
      className={`${inter.className} text-gray-900 dark:text-white relative flex flex-col lg:flex-row justify-center text-center items-center transition-colors w-full z-40 max-[699px]:pb-[10vh]`}
    >
      {/* Left side Hello Text */}
      <div
        id="text_container"
        className="flex flex-col items-center justify-center w-full lg:w-[90%] h-[50vh] pt-6 max-[700px]:pt-0 lg:pt-48 lg:sticky self-start lg:top-[15%] lg:pl-5"
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
            className="text-light hover:text-light_hover dark:text-dark dark:hover:text-dark_hover font-extrabold sm:max-w-full max-w-[18%] cursor-pointer"
            onClick={() => {
              const element = document.getElementById("about");
              if (element) {
                const top =
                  element.getBoundingClientRect().top + window.scrollY - 120;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }}
          >
            <p>
              01<span className="mx-2">——</span>About
            </p>
          </div>
          <div
            className="text-light hover:text-light_hover dark:text-dark dark:hover:text-dark_hover font-extrabold sm:max-w-full max-w-[20%] cursor-pointer"
            onClick={() => {
              const element = document.getElementById("experience");
              if (element) {
                const top =
                  element.getBoundingClientRect().top + window.scrollY - 120;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }}
          >
            <p>
              02<span className="mx-2">——</span>Experience
            </p>
          </div>
          <div
            className="text-light hover:text-light_hover dark:text-dark dark:hover:text-dark_hover font-extrabold sm:max-w-full max-w-[20%] cursor-pointer"
            onClick={() => {
              const element = document.getElementById("projects");
              if (element) {
                const top =
                  element.getBoundingClientRect().top + window.scrollY - 120;
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
      <div className="flex flex-col space-y-6 w-full  relative top-[5vh] items-center right-0 xl:right-[2vw]">
        <div className="text-left font-extrabold text-4xl w-[90%] sm:w-[80%] lg:w-[90%] pt-5">
          <h1 id="about"> ABOUT </h1>
        </div>
        <div className="flex flex-col text-sm sm:text-[16px] overflow-hidden items-start w-[90%] sm:w-[80%] lg:w-[90%] bg-slate-400/10 dark:bg-zinc-600/10 backdrop-blur-md dark:text-white text-gray-900 py-5 px-6 max-[450px]:px-2">
          <h1 className="font-extrabold text-2xl sm:text-3xl text-left">
            Welcome to my Personal Portfolio!
          </h1>
          <div className="flex flex-col text-left pl-4 justify-between h-full pt-6 pb-3">
            <p>
              I am a fullstack software engineer based in Toronto, Ontario. I
              graduated from the
              <span className="text-light dark:text-dark font-extrabold">
                &nbsp;University of Toronto&nbsp;
              </span>
              as a&nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                href="https://future.utoronto.ca/scholarships/presidents-scholars-of-excellence-program/"
              >
                President&apos;s Scholar of Excellence
              </a>
              &nbsp;in December 2024. Here are some of my technical skills:
            </p>
            <ul className="list-disc list-inside text-left pl-4 sm:pl-4 xl:pl-6 py-4 space-y-2">
              <li style={{ textIndent: "-1.5em" }}>
                <span className="font-extrabold">Languages:</span> JavaScript,
                CSS, HTML, Python, SQL, C/C++, Java, Go
              </li>
              <li style={{ textIndent: "-1.5em" }}>
                <span className="font-extrabold">Libraries/Frameworks:</span>{" "}
                TypeScript, React, Next.JS, Node.JS, Django, Flask, PyTorch,
                TailwindCSS
              </li>
              <li style={{ textIndent: "-1.5em" }}>
                <span className="font-extrabold">Developer Tools:</span> Git,
                AWS, Git, Docker, Kubernetes, Vercel, Postman, Firebase, Apache,
                TensorFlow, Jira
              </li>
            </ul>
            <p className="">
              Outside of my career, I am a youth mentor, bodybuilder, and
              GFX/VFX designer (
              <span className="text-light dark:text-dark underline font-extrabold">
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
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://trispects.com"
                className="hover:underline"
              >
                TriSpects Inc.
              </a>
            </h1>
            <div className="flex flex-row text-gray-500 dark:text-gray-300 sm:pl-4 pl-2 text-left">
              <p className="text-light dark:text-dark font-extrabold">
                Lead Fullstack Engineer
              </p>
              <p className="max-[500px]:hidden">&nbsp;• Sep 2023 - Jan 2024</p>
            </div>
            <ul className="list-disc list-inside text-left pl-4 sm:pl-4 xl:pl-12 pt-4 space-y-4 ">
              <li style={{ textIndent: "-1.5em" }}>
                Engineered company{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://trispects.com"
                  className="underline"
                >
                  website&apos;s
                </a>{" "}
                RESTful API and backend architecture using Python Django
                (Wagtail), improving API response times by 57% and reducing
                overhead when fetching data through heavy queries
              </li>
              <li style={{ textIndent: "-1.5em" }}>
                Fully developed <b>15+ page</b> company website{" "}
                <b>end-to-end</b> using <b>JavaScript/HTML/CSS</b> and Bootstrap
                for the frontend interface, ensuring a <b>100%</b> responsive
                design and seamless user experience across all devices
              </li>
              <li style={{ textIndent: "-1.5em" }}>
                Implemented dynamic JavaScript components by leveraging{" "}
                <b>event delegation</b> and <b>mutation observers</b>, while
                ensuring a seamless interface for <b>7000+ users</b> by adhering
                to the WCAG 2.1 accessibility standards
              </li>
            </ul>
          </div>
          <div id="SIRTTS" className="pb-2">
            <h1 className="font-extrabold text-2xl sm:text-3xl text-left">
              SIRTTS Inc.
            </h1>
            <div className="flex flex-row text-gray-500 dark:text-gray-300 sm:text-md sm:pl-4 pl-2 text-left">
              <p className="text-light dark:text-dark font-extrabold">
                Fullstack Engineer
              </p>
              <p className="max-[500px]:hidden">&nbsp;• May 2023 - Sep 2023</p>
            </div>
            <ul className="list-disc list-inside text-left pl-4 sm:pl-4 xl:pl-12 pt-4 space-y-4 text-[15px]">
              <li style={{ textIndent: "-1.5em" }}>
                Used Python Flask to engineer a RESTful API and deploy an
                application optimizing the appointment setting process for{" "}
                <b>1.7+ million</b> customers across Canada, addressing customer
                needs and stakeholder requirements
              </li>
              <li style={{ textIndent: "-1.5em" }}>
                Developed and spearheaded SIRTTS’s strategic plan to utilize{" "}
                <b>AI NLP libraries</b> in the company’s tech-stack{" "}
                <b>(Python, HTML/CSS3, JavaScript)</b> to enhance data
                processing and client deliverables
              </li>
              <li style={{ textIndent: "-1.5em" }}>
                Implemented two <b>fine-tuned AI models</b> to create a{" "}
                <b>Python</b>-based tool (NumPy, PyTorch) summarizing{" "}
                <b>300,000+ corporate chat messages</b> into action items,
                boosting client workflow efficiency by <b>200%</b>
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
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/HBehery/realityquest"
                className="hover:underline"
              >
                MAC Reality Quest
              </a>
            </h1>
            <div className="flex flex-row text-gray-500 dark:text-gray-300 sm:pl-4 pl-2">
              <p className="text-light dark:text-dark font-extrabold">
                TypeScript, Next.JS, TailwindCSS, SQL
              </p>
            </div>
            <ul className="list-disc list-inside text-left pl-4 sm:pl-4 xl:pl-12 space-y-4 text-[15px]">
              <li style={{ textIndent: "-1.5em" }}>
                Online scavenger hunt game with 150+ concurrent users at peak
                operation times.
              </li>
            </ul>
          </div>
          <div className="pb-2">
            <h1 className="font-extrabold text-2xl text-left">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/HBehery/AegisLock-AI-Password-Manager"
                className="hover:underline"
              >
                AI Password Manager
              </a>
            </h1>
            <div className="flex flex-row text-gray-500 dark:text-gray-300 sm:pl-4 pl-2">
              <p className="text-light dark:text-dark font-extrabold">
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
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/HBehery/iccoreflect"
                className="hover:underline"
              >
                ICCO Reflect
              </a>
            </h1>
            <div className="flex flex-row text-gray-500 dark:text-gray-300 sm:pl-4 pl-2">
              <p className="text-light dark:text-dark font-extrabold">
                TypeScript, Next.JS, TailwindCSS
              </p>
            </div>
            <ul className="list-disc list-inside text-left pl-4 sm:pl-4 xl:pl-12 space-y-4 text-[15px]">
              <li style={{ textIndent: "-1.5em" }}>
                Served as a portal to a daily competition hosted by ICCO, ~150
                users
              </li>
            </ul>
          </div>
          <div className="pb-2">
            <h1 className="font-extrabold text-2xl text-left">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/HBehery/Post-Secondary-Guidance"
                className="hover:underline"
              >
                Post Secondary Guidance
              </a>
            </h1>
            <div className="flex flex-row text-gray-500 dark:text-gray-300 sm:pl-4 pl-2">
              <p className="text-light dark:text-dark font-extrabold">
                Python + Tkinter
              </p>
            </div>
            <ul className="list-disc list-inside text-left pl-4 sm:pl-4 xl:pl-12 space-y-4 text-[15px]">
              <li style={{ textIndent: "-1.5em" }}>
                Provides users with the ideal Canadian universities to apply to
                depending on questionnaire results
              </li>
            </ul>
          </div>
          <div className="pb-2">
            <h1 className="font-extrabold text-2xl text-left">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/HBehery/hb_portfolio"
                className="hover:underline"
              >
                Website Portfolio
              </a>
            </h1>
            <div className="flex flex-row text-gray-500 dark:text-gray-300 sm:pl-4 pl-2">
              <p className="text-light dark:text-dark font-extrabold">
                TypeScript, Next.JS, TailwindCSS
              </p>
            </div>
            <ul className="list-disc list-inside text-left pl-4 sm:pl-4 xl:pl-12 space-y-4 text-[15px]">
              <li style={{ textIndent: "-1.5em" }}>
                This website! Makes use of React libraries such as Framer-Motion
                to produce a seamless portfolio.
              </li>
            </ul>
          </div>
          <div className="pb-2">
            <h1 className="font-extrabold text-xl sm:text-2xl text-left">
              + More (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/HBehery"
                className="underline"
              >
                Visit GitHub Profile
              </a>
              )
            </h1>
          </div>
        </div>
      </div>

      {/* Stars container to control overflow */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-[-1] ">
        {/* Stars */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute w-[2000px] h-[2000px] flex justify-end"
        >
          <img
            className="dark:brightness-100 brightness-0"
            src="welcome_assets/stars1.svg"
          />
        </motion.div>
        <motion.div
          style={{ y: backgroundY2 }}
          className="absolute w-[2000px] h-[2000px] flex justify-end"
        >
          <img
            className="dark:brightness-100 brightness-0"
            src="welcome_assets/stars2.svg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default WelcomeSection;
