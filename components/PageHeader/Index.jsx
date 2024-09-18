'use client'

import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import Navbar from '../Navbar';

// Page titles from paths; add new ones here when created
const pathnameToTitle = {
    '/': 'No name',
    '/about': 'About',
    '/bespoke': 'Bespoke',
    '/lookbook': 'Lookbook',
};

const PageHeader = ({ image }) => {
    const currentPath = usePathname();

    const title = pathnameToTitle[currentPath] || '';
  
    return (
        <div className="relative w-full h-64 md:h-80 lg:h-96">
            {/* Header image */}
            <Image
                src={image}
                alt={title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="w-full h-full"
            />
            {/* Navbar */}
            <div className="absolute top-0 left-0 mt-10 w-full z-20">
                <Navbar />
            </div>

            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-georgia-italic font-normal">
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default PageHeader;
