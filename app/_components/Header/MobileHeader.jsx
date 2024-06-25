import React from "react";
import { IoMenu } from "react-icons/io5";
import HimatiIcon from "@/_assets/himati-icon.svg";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
const MobileHeader = () => {
  return (
    <header className="md:hidden">
      <div className="flex flex-col items-center bg-gradient-to-r from-red-900 via-red-600 to-red-900 p-2">
        <div className="flex flex-row gap-24 items-center">
          <IoMenu className="text-xl font-semibold text-white w-5 h-5" />
          <div className="flex flex-row items-center">
            <Image src={HimatiIcon} alt="Himati Icon" className="w-14 h-14" />
            <h1 className="text-xl font-semibold text-white">HIMATI</h1>
          </div>
          <FiSearch className="text-xl font-semibold text-white w-5 h-5" />
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
