"use client"

import React, { useState, useEffect } from "react";
import Image from 'next/image';

import Footer from '../../components/Footer'
import PageHeader from '../../components/PageHeader'
import fetchS3ImageUrl from '../../components/S3Image'

const TopImage = 'wyfe_woman_wedding_dress.jpg';
const HeaderImage = 'wyfe_woman_lana_del_ray.jpg';
const BottomLeftImage = 'wyfe_cat_small.jpg';
const BottomRightImage = 'wyfe_earring.jpg';

const Lookbook = () => {
    
    // Get urls from image names - imageUrls set to dict which allows referencing of names
    const imageNames = [TopImage, HeaderImage, BottomLeftImage, BottomRightImage];

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
            {/* <Navbar /> */}

            <PageHeader 
                image={ imageUrls[HeaderImage] }
            />

            {/* Page content */}
            <main className="flex-1">
                <div className="container mx-auto px-4 max-w-screen-lg">
                    {/* Lookbook intro */}
                    <div className="px-4 py-8 text-center font-georgia-italic max-w-3xl mx-auto">
                        <p className="text-sm md:text-base lg:text-base">
                        [Lookbook introduction] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis diam sit amet risus efficitur porta. Cras venenatis accumsan ornare. Aenean mattis ligula mi, vel gravida tellus porta eget. Proin posuere feugiat ante sed convallis.
                        </p>
                    </div>
                    
                    {/* Top section */}
                    <div className="flex justify-center items-center gap-4 p-4">
                        <div className="w-1/2">
                            <Image 
                                src={imageUrls[TopImage]}
                                alt="Lookbook 1"
                                width="600"
                                height="600"
                                className=""
                            />
                        </div>
                        <div className="px-4 py-8 text-center font-georgia-italic max-w-3xl mx-auto">
                            <p className="text-sm md:text-base lg:text-base">
                            [Description of exerience] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis diam sit amet risus efficitur porta. Cras venenatis accumsan ornare. Aenean mattis ligula mi, vel gravida tellus porta eget. Proin posuere feugiat ante sed convallis. Donec vehicula sem eget mauris lobortis scelerisque. Aliquam finibus non quam non laoreet.
                            </p>
                        </div>
                    </div>

                    {/* Bottom images */}
                    <div className="flex justify-center gap-4 p-4">
                        <div className="w-1/2">
                            <Image 
                                src={imageUrls[BottomLeftImage]}
                                alt="Bespoke 1"
                                width="472"
                                height="600"
                                className="w-full h-full object-cover aspect-square"
                            />
                        </div>      
                        <div className="w-1/2">
                            <Image 
                                src={imageUrls[BottomRightImage]}
                                alt="Bespoke 2"
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

export default Lookbook;
