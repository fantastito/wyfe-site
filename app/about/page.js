import React from "react";
import Image from 'next/image';

import PageHeader from '../../components/PageHeader'
import Footer from '../../components/Footer'

import HeaderImage from '../../public/about/78c3906dbc503ebdcd50e2504235e0fe.jpg'

import TopLeftImage from '../../public/about/b90558a67ea295f99ba828a3b3f06197.jpg'
import TopRightImage from '../../public/about/78c3906dbc503ebdcd50e2504235e0fe.jpg'
import BottomLeftImage from '../../public/about/IMG_6026.jpg'
import BottomRightImage from '../../public/about/IMG_6005.jpg'

const About = () => {
    return (
        <div className="flex flex-col min-h-screen relative">
            {/* Navbar */}
            <PageHeader 
                image={ HeaderImage }
            />

            {/* Page content */}
            <main className="flex-1">
                <div className="container mx-auto px-4 max-w-screen-lg">
                    {/* Text */}
                    <div className="px-4 py-8 text-center font-georgia-italic max-w-3xl mx-auto">
                        <p className="text-sm md:text-base lg:text-base">
                        [About introduction] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis diam sit amet risus efficitur porta. Cras venenatis accumsan ornare. Aenean mattis ligula mi, vel gravida tellus porta eget. Proin posuere feugiat ante sed convallis.
                        </p>
                    </div>
                    
                    {/* Top images */}
                    <div className="flex justify-center gap-4 p-4">
                        <div className="w-1/2">
                            <Image 
                                src={TopLeftImage}
                                alt="About 1"
                                className="w-full h-full object-cover aspect-square"
                            />
                        </div>      
                        <div className="w-1/2">
                            <Image 
                                src={TopRightImage}
                                alt="About 2"
                                className="w-full h-full object-cover aspect-square"
                            />
                        </div>
                    </div>

                    {/* Text */}
                    <div className="px-4 py-8 text-center font-georgia-italic max-w-3xl mx-auto">
                        <p className="text-sm md:text-base lg:text-base">
                        [More text] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis diam sit amet risus efficitur porta. Cras venenatis accumsan ornare. Aenean mattis ligula mi, vel gravida tellus porta eget. Proin posuere feugiat ante sed convallis.
                        </p>
                    </div>
                    
                    {/* Bottom images */}
                    <div className="flex justify-center gap-4 p-4">
                        <div className="w-1/2">
                            <Image 
                                src={BottomLeftImage}
                                alt="About 3"
                                className="w-full h-full object-cover aspect-square"
                            />
                        </div>      
                        <div className="w-1/2">
                            <Image 
                                src={BottomRightImage}
                                alt="About 4"
                                className="w-full h-full object-cover aspect-square"
                            />
                        </div>
                    </div>
                
                </div>
            </main>

            <Footer />
        </div>

    );
};

export default About;
