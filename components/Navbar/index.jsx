'use client'

import Link from 'next/link';
import React from "react";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const currentPath = usePathname();

  const pages = [
    {name: "Wyfe", path: "/"},
    {name: "Lookbook", path: "/lookbook"},
    {name: "Bespoke", path: "/bespoke"},
    {name: "About", path: "/about"}
  ]

  const filteredPages = pages.filter(page => page.path !== "/" && page.path !== currentPath);

  // Homepage
  if (currentPath == "/") {
    return (
      <nav className="bg-black font-georgia-italic py-2 md:py-2 lg:py-2 text-white w-full">
        <div className="max-w-7xl mx-auto flex justify-center items-center px-4 md:px-8 lg:px-12">
          <div className="flex space-x-4 md:space-x-6 lg:space-x-8">
            {filteredPages.map((page) => (
              <Link key={page.path} href={page.path}>{page.name}</Link>
            ))}
          </div>
        </div>
      </nav>
    );
  } else {
  // All other pages
    return (
      <nav className="bg-black font-georgia-italic py-1 md:py-1 lg:py-1 text-white w-full">
        <div className="max-w-5xl mx-auto flex justify-center items-center px-4 md:px-8 lg:px-12">
          
          {/* Left section */}
          <div className="flex-1">
            <Link href="/">Wyfe</Link>
          </div>

          {/* Right section */}
          <div className="flex-1 flex justify-end space-x-4 md:space-x-6 lg:space-x-8">
            {filteredPages.map((page) => (
              <Link key={page.path} href={page.path}>{page.name}</Link>
            ))}
          </div>

        </div>
      </nav>
    );
  };
};
  
  export default Navbar;