// import Link from 'next/Link';
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black font-georgia-italic py-2 md:py-4 lg:py-4 text-white w-full">
      <div className="max-w-7xl mx-auto flex justify-center items-center px-4 md:px-8 lg:px-12">
        <div className="flex space-x-4 md:space-x-6 lg:space-x-8">
          <p className="text-base md:text-lg lg:text-xl">Wyfe</p>
          <p className="text-base md:text-lg lg:text-xl">Dresses</p>
          <p className="text-base md:text-lg lg:text-xl">Bespoke</p>
          <p className="text-base md:text-lg lg:text-xl">About</p>
        </div>
      </div>
    </nav>
  );
};
  
  export default Navbar;