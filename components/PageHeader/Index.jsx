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
        <div className="relative w-full h-28 md:h-36 lg:h-48">
            {/* Header image */}
            <Image
                src={image}
                alt={title}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="w-full h-full"   
            />
            
            <div className="absolute inset-0 bg-black opacity-30 z-10" />
            
            <div className="absolute inset-0 flex flex-col z-20">
                {/* Spacer for 1/3 height */}
                <div className="flex-grow" />

                {/* Navbar */}
                <div className="flex-grow-0">
                    <Navbar />
                </div>

                {/* Spacer for 1/3 height */}
                <div className="flex-grow" />

                {/* Title */}
                <div className="flex-grow-0 flex justify-center py-2">
                    <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-georgia-italic font-normal">
                        {title}
                    </h1>
                </div>

                {/* Spacer for 1/3 height */}
                <div className="flex-grow" />
            </div>
        </div>
    );
};

export default PageHeader;
