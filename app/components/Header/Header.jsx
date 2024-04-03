import React from "react";
import Image from "next/image";
import HimatiIcon from "../../assets/himati-icon.svg";
import { IoSearchSharp } from "react-icons/io5";
const Header = () => {
  const navButtonStyle = "text-base font-light text-white";
  return (
    <header>
      <div className="flex flex-col items-center bg-red-500 bg-gradient-to-r via-red-600 from-red-700 to-red-800 p-2">
        <div className="fixed inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_100%_0%,#000_0%,transparent_40%)]"></div>
        <div className="flex flex-row items-center">
          <Image src={HimatiIcon} alt=""></Image>
          <h1 className="text-5xl font-semibold text-white">HIMATI</h1>
        </div>
        <div className="flex flex-row items-center gap-x-10">
          <a className={navButtonStyle} href="/">
            HOME
          </a>
          <a className={navButtonStyle} href="/">
            NEWS
          </a>
          <a className={navButtonStyle} href="/">
            FEATURES
          </a>
          <a className={navButtonStyle} href="/">
            KULTURA
          </a>
          <a className={navButtonStyle} href="/">
            OPINION
          </a>
          <a className={navButtonStyle} href="/">
            ABOUT US
          </a>
          <div className="flex items-center bg-white border-2 border-black rounded-full p-2">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-black font-bold placeholder-black focus:outline-none"
            />
            <IoSearchSharp />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
