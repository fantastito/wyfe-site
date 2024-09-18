import React from "react";
import Image from 'next/image';

import Footer from '../../components/Footer'
import PageHeader from '../../components/PageHeader'

import TopImage from '../../public/bespoke/3a66b72d47890e697456a00f571105f8.jpg'
import HeaderImage from '../../public/bespoke/78c3906dbc503ebdcd50e2504235e0fe.jpg'
import BottomLeftImage from '../../public/bespoke/the_cat_small.jpg'
import BottomRightImage from '../../public/bespoke/10-harley-viera-newton-wedding-dress-fitting.jpg'

// Email button backend
const email = "hello@wyfe.co.uk"
const subject = "Tell me about bespoke dresses"
const body = `Hi Wyfe,\n\nI'd like to know more about your bespoke dresses.\n\nWedding date: [When is your wedding?]\nBudget: [What is your budget?]\nWhat I'm looking for: [What ideas do you have?]\n\nThanks,`
const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const Bespoke = () => {
    return (
        <div className="flex flex-col min-h-screen relative">
            {/* <Navbar /> */}

            <PageHeader 
                image={ HeaderImage }
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
                            src={TopImage}
                            alt="Bespoke 1"
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
                                src={BottomLeftImage}
                                alt="Bespoke 1"
                                className="w-full h-full object-cover aspect-square"
                            />
                        </div>      
                        <div className="w-1/2">
                            <Image 
                                src={BottomRightImage}
                                alt="Bespoke 2"
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
