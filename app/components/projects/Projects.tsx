"use client";

import React, { useRef } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import useDimension from "@/app/hooks/useDimension";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "800"],
});

const images = [
  { src: "image1.png", href: "https://trispects.com/" },
  {
    src: "image2.png",
    href: "https://github.com/HBehery/Hangman",
  },
  {
    src: "image3.png",
    href: "https://github.com/HBehery/AegisLock-AI-Password-Manager",
  },
  {
    src: "image4.png",
    href: "https://github.com/HBehery/Post-Secondary-Guidance",
  },
  { src: "image5.png", href: null }, // No href for image5
  {
    src: "image6.png",
    href: "https://github.com/HBehery/steal-the-diamond-cyoa",
  },
  { src: "image7.png", href: "https://trispects.com/" },
  {
    src: "image8.png",
    href: "https://github.com/HBehery/Post-Secondary-Guidance",
  },
  {
    src: "image9.png",
    href: "https://github.com/HBehery/realityquest",
  },
];

const ProjectsPage = () => {
  const container = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height * 2.1]
  );
  const y2: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height * 3]
  );
  const y3: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height * 3.6]
  );

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
    </div>
  );
};

// Column Component

interface ImageItem {
  src: string;
  href: string | null;
}

interface ColumnProps {
  images: ImageItem[];
  y: MotionValue<number>;
}

const Column: React.FC<ColumnProps> = ({ images, y = 0 }) => {
  return (
    <motion.div
      style={{ y }}
      id="column"
      className="w-1/3 h-100vh flex flex-col gap-[2vw] overflow-hidden relative first:top-[-60vh] even:top-[-85vh] last:top-[-115vh]"
    >
      {images.map((image: ImageItem, index: number) => {
        const { src, href } = image;
        return (
          <div
            key={index}
            className={`relative w-full h-[300px] sm:h-[20rem] sm:min-w-[200px] transition-all
            ${
              src === "image5.png"
                ? "grayscale-0"
                : "grayscale hover:grayscale-0"
            } 
            transition-all`}
          >
            {src === "image5.png" && (
              <div className="absolute z-10 inset-0 flex justify-center items-center">
                <h1
                  className={`${inter.className} text-stone-800 hover:text-stone-700 dark:text-gray-800 dark:hover:text-gray-700 sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold  z-40 text-center transition-colors`}
                >
                  <Link href={"/projects"}>
                    MY <br /> PROJECTS
                  </Link>
                </h1>
              </div>
            )}
            {href ? (
              <Link href={href}>
                <Image
                  className="object-cover rounded-[2vw] lg:rounded-[0.5vw]"
                  src={`/project_assets/${src}`}
                  fill
                  alt="project image"
                />
              </Link>
            ) : (
              <Image
                className="object-cover rounded-[2vw] lg:rounded-[0.5vw] hue-rotate-[120deg] dark:hue-rotate-[20deg] shadow-[rgba(0,0,0,0.5)_1px_1px_20px_1px] dark:shadow-[rgba(255,255,255,0.25)_1px_1px_15px_6px]"
                src={`/project_assets/${src}`}
                fill
                alt="project image"
              />
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

export default ProjectsPage;
