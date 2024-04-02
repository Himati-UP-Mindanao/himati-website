import React from "react";
import Image from "next/image";
import HimatiIcon from "../../assets/himati-icon.svg";
import { IoSearchSharp } from "react-icons/io5";
const Header = () => {
  return (
    <header>
      <div className="flex flex-col items-center bg-red-400">
        <div className="flex flex-row items-center">
          <Image src={HimatiIcon} alt=""></Image>
          <h1>HIMATI</h1>
        </div>
        <div className="flex flex-row items-center gap-x-10">
          <a href="/">HOME</a>
          <a href="/">NEWS</a>
          <a href="/">FEATURES</a>
          <a href="/">KULTURA</a>
          <a href="/">OPINION</a>
          <a href="/">ABOUT US</a>
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
