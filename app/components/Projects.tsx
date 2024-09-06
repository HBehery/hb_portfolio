"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import useDimension from "@/useDimension";

const images = [
  "image1.png",
  "image2.png",
  "image3.png",
  "image4.png",
  "image5.png",
  "image6.png",
  "image7.png",
  "image8.png",
  "image9.png",
];

const ProjectsPage = () => {
  const container = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2.5]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.2]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <div id="projects">
      <div className="h-[100vh]" />

      <div
        ref={container}
        id="gallery"
        className="height-[175vh] flex flex-row gap-[2vw] p-[2vw] box-border overflow-hidden"
      >
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
      </div>
      <div className="h-[100vh]" />
    </div>
  );
};

// Column Component

const Column = ({ images, y = 0 }) => {
  return (
    <motion.div
      style={{ y }}
      id="column"
      className="w-1/3 h-100vh flex flex-col gap-[2vw] overflow-hidden relative first:top-[-100vh] even:top-[-125vh] last:top-[-35rem]"
    >
      {images.map((src, index) => {
        return (
          <div
            key={index}
            className="relative w-full h-[20rem] min-w-[250px] grayscale hover:grayscale-0 transition-all"
          >
            {src === "image5.png" && (
              <div className="absolute z-10 inset-0 flex justify-center items-center">
                <h1 className="text-white text-7xl font-bold">PROJECTS</h1>
              </div>
            )}
            <Image
              className="object-cover rounded-[1vw]"
              src={`/project_images/${src}`}
              fill
              alt="project image"
            />
          </div>
        );
      })}
    </motion.div>
  );
};

export default ProjectsPage;
