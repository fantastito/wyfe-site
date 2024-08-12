import React from "react";
import Image from 'next/image';

import Footer from '../../components/Footer'
import PageHeader from '../../components/PageHeader'

// Env variable to toggle between public and client development images
const imageSet = process.env.NEXT_PUBLIC_IMAGE_SET || 'unsplash';

import MoodTopImage from '../../public/mood/bespoke/3a66b72d47890e697456a00f571105f8.jpg'
import MoodHeaderImage from '../../public/mood/bespoke/78c3906dbc503ebdcd50e2504235e0fe.jpg'
import MoodBottomLeftImage from '../../public/mood/bespoke/the_cat_small.jpg'
import MoodBottomRightImage from '../../public/mood/bespoke/10-harley-viera-newton-wedding-dress-fitting.jpg'

import UnsplashTopImage from '../../public/unsplash/bespoke/lance-reis-6n2_zdmsFFM-unsplash.jpg'
import UnsplashHeaderImage from '../../public/unsplash/bespoke/collab-media-BzZ6hnqtsbo-unsplash.jpg'
import UnslpashBottomLeftImage from '../../public/unsplash/bespoke/ivan-dodig-g9bBxGOPPMI-unsplash.jpg'
import UnsplashBottomRightImage from '../../public/unsplash/bespoke/samantha-gades-JeEemtLSdjU-unsplash.jpg'

let HeaderImage, TopImage, BottomLeftImage, BottomRightImage;

if (imageSet === 'mood') {
    TopImage = MoodTopImage
    HeaderImage = MoodHeaderImage
    BottomLeftImage = MoodBottomLeftImage
    BottomRightImage = MoodBottomRightImage
} else {
    TopImage = UnsplashTopImage
    HeaderImage = UnsplashHeaderImage
    BottomLeftImage = UnslpashBottomLeftImage
    BottomRightImage = UnsplashBottomRightImage
}

// Email button backend
const email = "hello@wyfe.co.uk"
const subject = "Tell me about bespoke dresses"
const body = `Hi Wyfe,\n\nI'd like to know more about your bespoke dresses.\n\nWedding date: [enter your wedding date]\nBudget: [enter your budget]\nWhat I'm looking for: [enter your ideas]\n\nThanks,`
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
                    {/* Text */}
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
                                Inquire about bespoke a dress
                            </button>
                        </a>
                    </div>

                    {/* bottom images */}
                    <div className="flex justify-center gap-4 p-4">
                        <div className="w-1/2 h-[50vh] flex items-center">
                            <Image 
                                src={BottomLeftImage}
                                alt="Bespoke 3"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-1/2 h-[50vh] flex items-center">
                            <Image 
                                src={BottomRightImage}
                                alt="Bespoke 4"
                                className="w-full h-full object-cover"
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
