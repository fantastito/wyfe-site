import React from 'react';
import Image from 'next/image';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageOverlay from '../components/ImageOverlay/Index'

import wyfeLogoWhite from '../public/wyfe_logo_text_white.svg';

import MoodHeroImage from '../public/mood/hero_image.jpg'
import UnsplashHeroImage from '../public/unsplash/hero_image.jpg'

// Env variable to toggle between public and client development images
const imageSet = process.env.NEXT_PUBLIC_IMAGE_SET || 'unsplash';

let HeroImage;

if (imageSet === 'mood') {
  HeroImage = MoodHeroImage
} else {
  HeroImage = UnsplashHeroImage
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Image
          src={ HeroImage }
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority={true}
          quality={100}
          className="w-full h-full"
        />
        {imageSet !== 'mood' && (
          <div className="z-10 pointer-events-auto">
            <ImageOverlay 
              photographer="Sonnie Hiles" 
              photographerHyperlink="https://unsplash.com/@sonniehiles" 
              imageHyperlink="https://unsplash.com/photos/shallow-focus-photo-of-woman-in-white-dress-shirt-on-seashore-during-daytime-WTe3w4POlCE"
            />
          </div>
        )}
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
