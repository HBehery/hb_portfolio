"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import ProjectsPage from "../components/Projects";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ZoomProjects = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  const zoomContainer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: zoomContainer,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [0, 4]);

  return (
    <div ref={zoomContainer} className="mt-[50vh] mb-[100vh]">
      <div id="container" className="h-[200vh] relative">
        <div
          id="sticky"
          className="sticky top-0 h-[100vh] bg-gray-900 overflow-hidden"
        >
          <div id="element" className="w-full h-full absolute top-0">
            <ProjectsPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoomProjects;
