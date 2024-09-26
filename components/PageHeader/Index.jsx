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
        <div className="relative w-full h-36 md:h-36 lg:h-48">
            {/* Header image */}
            <Image
                src={image}
                alt={title}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="w-full h-full"   
            />
            <div className="absolute inset-0 flex flex-col justify-between z-20">
                {/* Navbar and Title Container */}
                <div className="flex flex-col justify-between flex-1 mt-5">
                    <Navbar />
                    <div className="flex justify-center bg-black bg-opacity-20 py-2">
                        <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-georgia-italic font-normal">
                            {title}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;
