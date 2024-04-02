import React from "react";
import Image from "next/image";
import HimatiIcon from "../../assets/himati-icon.svg";
const Header = () => {
  return (
    <header>
      <div className="flex flex-col items-center bg-red-400">
        <div className="flex flex-row items-center">
          <Image src={HimatiIcon} alt=""></Image>
          <h1>HIMATI</h1>
        </div>
        <div className="flex flex-row gap-x-10">
          <a href="/">HOME</a>
          <a href="/">NEWS</a>
          <a href="/">FEATURES</a>
          <a href="/">KULTURA</a>
          <a href="/">OPINION</a>
          <a href="/">ABOUT US</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
