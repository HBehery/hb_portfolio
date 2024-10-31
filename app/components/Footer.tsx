import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div
      id="footer"
      className="h-[33vh] bg-black/90 dark:bg-black/70 transition-all "
    >
      <div
        id="footer_container"
        className="flex align-middle justify-left items-center h-full w-full px-4 sm:px-10 lg:px-20 xl:px-24 "
      >
        <div id="image_container" className="relative w-[200px] h-[75%]">
          <Image
            src={`/footer_assets/face_card.png`}
            alt="My Face Card"
            fill
            className="object-cover"
          />
        </div>
        <div
          id="text container"
          className="text-gray-100 flex flex-col justify-left px-6 space-y-8"
        >
          <div className="text-xl md:text-2xl max-[470px]:text-lg">
            <h1 id="Title" className="">
              MADE BY: HAMZAH BEHERY
            </h1>
            <h1 id="Subtitle" className="dark:text-indigo-400 text-rose-500">
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
  );
};

export default Footer;
