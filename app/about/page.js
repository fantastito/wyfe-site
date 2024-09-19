"use client"

import React, { useState, useEffect } from "react";
import Image from 'next/image';

import PageHeader from '../../components/PageHeader'
import Footer from '../../components/Footer'
import fetchS3ImageUrl from '../../components/S3Image'

const HeaderImage = 'wyfe_champagne_glass.jpg';
const TopLeftImage = 'wyfe_woman_dress_bows.jpg';
const TopRightImage = 'wyfe_champagne_glass.jpg';
const BottomLeftImage = 'wyfe_hair.jpg';
const BottomRightImage = 'wyfe_legs.jpg';

const About = () => {

    // Get urls from image names - imageUrls set to dict which allows referencing of names
    const imageNames = [HeaderImage, TopLeftImage, TopRightImage, BottomLeftImage, BottomRightImage];

    const [imageUrls, setImageUrls] = useState({});

    useEffect(() => {
        const fetchAllImages = async () => {
            const urls = {};
            for (const name of imageNames) {
                const url = await fetchS3ImageUrl(name); // Directly use your function here
                urls[name] = url;
            }
            setImageUrls(urls);
        };

        fetchAllImages();
    }, []);

    return (
        <div className="flex flex-col min-h-screen relative">
            {/* Navbar */}
            <PageHeader 
                image={ imageUrls[HeaderImage] }
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
                                src={ imageUrls[TopLeftImage] }
                                alt="About 1"
                                width="472"
                                height="600"
                                className="w-full h-full object-cover aspect-square"
                            />
                        </div>      
                        <div className="w-1/2">
                            <Image 
                                src={ imageUrls[TopRightImage] }
                                alt="About 2"
                                width="472"
                                height="600"
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
                                src={ imageUrls[BottomLeftImage] }
                                alt="About 3"
                                width="472"
                                height="600"
                                className="w-full h-full object-cover aspect-square"
                            />
                        </div>      
                        <div className="w-1/2">
                            <Image 
                                src={ imageUrls[BottomRightImage] }
                                alt="About 4"
                                width="472"
                                height="600"
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
