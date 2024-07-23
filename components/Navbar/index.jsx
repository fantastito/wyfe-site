// import Link from 'next/Link';
import React from "react";

const Navbar = () => {
    return (
      <nav className="bg-black p-4 font-georgia-italic text-white">
        <div className="max-w-7xl mx-auto flex justify-end items-center">
          <div className="flex space-x-4">
            <p className="text-xl">Wyfe</p>
            <p className="text-xl">Boutique</p>
            <p className="text-xl">Bespoke</p>
            <p className="text-xl">About</p>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;