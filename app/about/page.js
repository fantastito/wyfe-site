import React from "react";
import Image from 'next/image';

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const imageSet = process.env.NEXT_PUBLIC_IMAGE_SET || 'unsplash';

import MoodTopLeftImage from '../../public/mood/bespoke/3a66b72d47890e697456a00f571105f8.jpg'
import MoodTopRightImage from '../../public/mood/bespoke/78c3906dbc503ebdcd50e2504235e0fe.jpg'
import UnsplashTopLeftImage from '../../public/unsplash/bespoke/collab-media-BzZ6hnqtsbo-unsplash.jpg'
import UnsplashTopRightImage from '../../public/unsplash/bespoke/lance-reis-6n2_zdmsFFM-unsplash.jpg'


let TopLeftImage, TopRightImage;

if (imageSet === 'mood') {
    TopLeftImage = MoodTopLeftImage;
    TopRightImage = MoodTopRightImage;
} else {
    TopLeftImage = UnsplashTopLeftImage;
    TopRightImage = UnsplashTopRightImage;
}

const About = () => {
    return (
        <div className="flex flex-col min-h-screen relative">
            <Navbar />

            {/* Page content */}
            <main className="flex-1">
                <div className="container mx-auto px-4 max-w-screen-lg">
                    {/* Text */}
                    <div className="px-4 py-8 text-center font-georgia-italic max-w-3xl mx-auto">
                        <p className="text-sm md:text-base lg:text-base">
                        [Bespoke introduction] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis diam sit amet risus efficitur porta. Cras venenatis accumsan ornare. Aenean mattis ligula mi, vel gravida tellus porta eget. Proin posuere feugiat ante sed convallis.
                        </p>
                    </div>
                    
                    {/* Top images */}
                    <div className="flex justify-center gap-4 p-4">
                        <Image 
                            src={TopLeftImage}
                            alt="Bespoke 1"
                            className="w-1/2 h-auto object-cover"
                        />
                        <Image 
                            src={TopRightImage}
                            alt="Bespoke 2"
                            className="w-1/2 h-68 object-cover"
                        />
                    </div>
                
                </div>
            </main>

            <Footer />
        </div>

    );
};

export default About;
