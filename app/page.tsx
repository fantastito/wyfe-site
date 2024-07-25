import React from 'react';
import Image from 'next/image';

import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import wyfeLogoWhite from '../public/wyfe_logo_text_white.svg';
import heroImage from '@/public/IMG_6056.jpg';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority={true}
          quality={100}
          className="w-full h-full"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex-grow">
        {/* Logo */}
        <div className="text-center pt-16 pb-32 md:pt-32 md:pb-36 lg:pt-36 lg:pb-44">
          <Image 
            src={wyfeLogoWhite} 
            alt="Wyfe Logo" 
            className="mx-auto w-64 md:w-80 lg:w-96"
          />
        </div>
        
        {/* Navbar */}
        <Navbar />
      </div>
      
      {/* Footer */}
      <div className="relative z-20">
        <Footer />
      </div>
      
    </div>
  );
}
