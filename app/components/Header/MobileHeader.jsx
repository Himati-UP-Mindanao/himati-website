import React from "react";
import { IoMenu } from "react-icons/io5";
const MobileHeader = () => {
  return (
    <header className="md:hidden">
      <div className="flex flex-col items-center bg-gradient-to-r from-red-700 via-red-600 to-red-800 p-2">
        <div className="flex flex-row items-center">
          <IoMenu />
          <h1 className="text-5xl font-semibold text-white">HIMATI</h1>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
