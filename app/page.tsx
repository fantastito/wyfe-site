import React from 'react';
import Image from 'next/image';

import Navbar from '../components/Navbar'
import Contact from '../components/Contact'

import wyfeLogoWhite from '../public/wyfe_logo_text_white.svg'
import heroImage from '@/public/IMG_6056.jpg'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          priority={true}
          quality={100}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-screen-xl px-4">
        {/* Navbar */}
        <Navbar />
        
        {/* Logo */}
        <div className="text-center py-8">
          <Image src={wyfeLogoWhite} alt="Wyfe Logo" width={400} className="pb-4 mx-auto"/>
        </div>
        
        {/* Contact */}
        <Contact />
      </div>
    </div>
  );
}
