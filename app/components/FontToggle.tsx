"use client";
import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const FontToggle = () => {
  const fonts = [
    "font-sans",
    "font-serif",
    "font-mono",
    "font-cursive",
    "font-fantasy",
    "font-thin",
    "font-extralight",
    "font-light",
    "font-normal",
    "font-semibold",
  ];

  const [currentFontIndex, setCurrentFontIndex] = useState(0);

  const handleClick = () => {
    setCurrentFontIndex((prevIndex) => (prevIndex + 1) % fonts.length);
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { bounce: 0 });
  const mouseYSpring = useSpring(y, { bounce: 0 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["20deg", "-20deg"]);

  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-20deg", "20deg"]);

  const handleMouseMove = (e: any) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="flex w-36 px-4 py-5 align-middle justify-center items-center border-gray-200/80 
      border-0 shadow-[rgba(0,0,0,0.13)_0px_0px_0px_0px] hover:shadow-[rgba(0,0,0,0.13)_3px_3px_10px_2px] 
      dark:shadow-[rgba(255,255,255,0.08)_0px_0px_0px_0px] dark:hover:shadow-[rgba(255,255,255,0.08)_3px_3px_15px_1px] 
      transition-all duration-10000 ease-out rounded-md"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transition: "ease-out 0.075s",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <p
        className={`${fonts[currentFontIndex]} text-xl cursor-pointer select-none`}
        onClick={handleClick}
        style={{ transform: "translateZ(5px)", transformStyle: "preserve-3d" }}
      >
        hamzah.
      </p>
    </motion.div>
  );
};

export default FontToggle;
