import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoMenu } from 'react-icons/io5';

import Image from 'next/image';

import HimatiIcon from '@/_assets/himati-icon.svg';

const MobileHeader = () => {
  return (
    <header className="md:hidden">
      <div className="flex flex-col items-center bg-gradient-to-r from-red-900 via-red-600 to-red-900 p-2">
        <div className="flex flex-row items-center gap-24">
          <IoMenu className="h-5 w-5 text-xl font-semibold text-white" />
          <div className="flex flex-row items-center">
            <Image src={HimatiIcon} alt="Himati Icon" className="h-14 w-14" />
            <h1 className="font-acronym text-xl font-semibold text-white">HIMATI</h1>
          </div>
          <FiSearch className="h-5 w-5 text-xl font-semibold text-white" />
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
