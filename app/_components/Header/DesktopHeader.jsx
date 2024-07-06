import React from "react";
import Image from "next/image";
import HimatiIcon from "@/_assets/himati-icon.svg";
import { IoSearchSharp } from "react-icons/io5";
import Link from "next/link";

const DesktopHeader = () => {
  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "NEWS", href: "/news" },
    { label: "FEATURES", href: "/features" },
    { label: "KULTURA", href: "/kultura" },
    { label: "OPINION", href: "/opinion" },
    { label: "ABOUT US", href: "/about" },
  ];

  return (
    <header className="hidden md:block">
      <div className="flex flex-col items-center bg-gradient-to-r from-red-900 via-red-600 to-red-900 p-2">
        {/* Overlay for grid pattern
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_100%_0%,#000_0%,transparent_40%)]"></div> */}

        <div className="flex flex-row items-center">
          <Image src={HimatiIcon} alt="Himati Icon" />
          <h1 className="text-5xl font-semibold text-white ml-2">HIMATI</h1>
        </div>

        <nav className="flex flex-row items-center gap-x-10 mt-1">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-base font-light text-white hover:text-gray-300 transition-colors duration-300"
            >
              {label}
            </Link>
          ))}

          <div className="flex items-center bg-white border-1 border-black rounded-full p-2 ml-4">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-black font-bold placeholder-black focus:outline-none pl-1"
            />
            <IoSearchSharp className="ml-2" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default DesktopHeader;
