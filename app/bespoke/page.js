"use client"

import React, { useState, useEffect } from "react";
import Image from 'next/image';

import Footer from '../../components/Footer'
import PageHeader from '../../components/PageHeader'
import fetchS3ImageUrl from '../utils/fetchS3ImageUrl'

const TopImage = 'wyfe_woman_dress.jpg';
const HeaderImage = 'wyfe_champagne_glass.jpg';
const BottomLeftImage = 'wyfe_cat_small.jpg';
const BottomRightImage = 'wyfe_earring.jpg';

// Email button backend
const email = "hello@wyfe.co.uk"
const subject = "Tell me about bespoke dresses"
const body = `Hi Wyfe,\n\nI'd like to know more about your bespoke dresses.\n\nWedding date: [When is your wedding?]\nBudget: [What is your budget?]\nWhat I'm looking for: [What ideas do you have?]\n\nThanks,`
const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const Bespoke = () => {
    
    // Get urls from image names - imageUrls set to dict which allows referencing of names
    const imageNames = [TopImage, HeaderImage, BottomLeftImage, BottomRightImage];

    const [imageUrls, setImageUrls] = useState({});

    useEffect(() => {
        const fetchAllImages = async () => {
            const urls = {};
            for (const name of imageNames) {
                const url = await fetchS3ImageUrl(name); // fetching function called here
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
                    {/* Bespoke intro */}
                    <div className="px-4 py-8 text-center font-georgia-italic max-w-3xl mx-auto">
                        <p className="text-sm md:text-base lg:text-base">
                        [Bespoke introduction] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis diam sit amet risus efficitur porta. Cras venenatis accumsan ornare. Aenean mattis ligula mi, vel gravida tellus porta eget. Proin posuere feugiat ante sed convallis.
                        </p>
                    </div>
                    
                    {/* Top section */}
                    <div className="flex justify-center items-center gap-4 p-4">
                        <Image 
                            src={imageUrls[TopImage]}
                            alt="Bespoke 1"
                            width="600"
                            height="600"
                            className="w-1/2 h-auto object-cover"
                        />
                        <div className="px-4 py-8 text-center font-georgia-italic max-w-3xl mx-auto">
                            <p className="text-sm md:text-base lg:text-base">
                            [Description of exerience] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis diam sit amet risus efficitur porta. Cras venenatis accumsan ornare. Aenean mattis ligula mi, vel gravida tellus porta eget. Proin posuere feugiat ante sed convallis. Donec vehicula sem eget mauris lobortis scelerisque. Aliquam finibus non quam non laoreet.
                            </p>
                        </div>
                    </div>
                    
                    {/* Call to action text */}
                    <div className="px-4 pb-2 pt-4 text-center font-georgia-italic max-w-3xl mx-auto">
                        <p className="text-sm md:text-base lg:text-base">
                        [Call to action] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis diam sit amet risus efficitur porta. Cras venenatis accumsan ornare. Aenean mattis ligula mi, vel gravida tellus porta eget. Proin posuere feugiat ante sed convallis. Donec vehicula sem eget mauris lobortis scelerisque. Aliquam finibus non quam non laoreet.
                        </p>
                    </div>

                    {/* Call to action button */}
                    <div className="flex justify-center items-center pt-2 pb-4">
                        <a href={mailtoLink}>
                            <button className="font-georgia-italic bg-black border-2 border-white hover:bg-white text-white hover:text-black py-2 px-4">
                                Inquire about a bespoke dress
                            </button>
                        </a>
                    </div>

                    {/* Botom images */}
                    <div className="flex justify-center gap-4 p-4">
                        <div className="w-1/2">
                            <Image 
                                src={imageUrls[BottomLeftImage]}
                                alt="Bespoke 1"
                                width="472"
                                height="600"
                                className="w-full h-full object-cover"
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

export default Bespoke;
