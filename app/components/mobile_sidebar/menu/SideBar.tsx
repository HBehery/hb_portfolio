import React from "react";
import Link from "next/link";

const navItems = [
  { title: "Home", href: "/" },
  {
    title: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/hamzah-behery/",
  },
  { title: "GitHub Profile", href: "https://github.com/HBehery" },
  { title: "Projects Page", href: "/projects" },
  { title: "My Resume", href: "/Resume-Hamzah_Behery.pdf", download: true },
];

const SideBar = () => {
  return (
    <div
      id="menu"
      className="fixed right-0 h-[100vh] bg-gray-700 backdrop-blur-md text-white"
    >
      <div id="body" className="p-[100px] justify-between">
        <div id="nav" className="flex flex-col text-[56px] gap-3 mt-[80px]">
          <div id="header">
            <p>Navigation</p>
            {navItems.map((item, index) => (
              <div id="link" key={index}>
                <Link
                  href={item.href}
                  {...(item.download && { download: true })}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
