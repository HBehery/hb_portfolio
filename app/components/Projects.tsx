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

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2.1]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 3.6]);

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
      <div className="h-[20vh]" />

      <div
        ref={container}
        id="gallery"
        className="h-[250vh] flex flex-row gap-[2vw] p-[2vw] box-border overflow-hidden"
      >
        <Column
          images={[images[0], images[8], images[3], images[0], images[7]]}
          y={y}
        />
        <Column images={[images[2], images[4], images[5], images[2]]} y={y2} />
        <Column images={[images[6], images[7], images[1], images[0]]} y={y3} />
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
      className="w-1/3 h-100vh flex flex-col gap-[2vw] overflow-hidden relative first:top-[-60vh] even:top-[-85vh] last:top-[-115vh]"
    >
      {images.map((src, index) => {
        return (
          <div
            key={index}
            className={`relative w-full h-[300px] sm:h-[20rem] sm:min-w-[200px] transition-all
            ${
              src === "image5.png"
                ? "grayscale-0 blur-none"
                : "grayscale hover:grayscale-0 blur-[1px] hover:blur-[0px]"
            } 
            transition-all`}
          >
            {src === "image5.png" && (
              <div className="absolute z-10 inset-0 flex justify-center items-center">
                <h1 className="text-gray-700 sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold z-40 text-center">
                  MY <br /> PROJECTS
                </h1>
              </div>
            )}
            <Image
              className="object-cover rounded-[0.5vw]"
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
