"use client";
import React from "react";
import WelcomeSection from "./components/welcome/WelcomeSection";
import ProjectsPage from "./components/projects/Projects";
import Footer from "./components/Footer";
import { useEffect } from "react";
import Lenis from "lenis";

const HomePage = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: DOMHighResTimeStamp): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div id="home_page" className="">
      <WelcomeSection />

      <div>
        <ProjectsPage />
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
