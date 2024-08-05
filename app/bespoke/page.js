import React from "react";
import Image from 'next/image';

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import PageHeader from '../../components/PageHeader'

const imageSet = process.env.NEXT_PUBLIC_IMAGE_SET || 'unsplash';

import TopLeftImage from '../../public/mood/bespoke/3a66b72d47890e697456a00f571105f8.jpg'
import TopRightImage from '../../public/mood/bespoke/78c3906dbc503ebdcd50e2504235e0fe.jpg'
import BottomLeftImage from '../../public/mood/bespoke/10-harley-viera-newton-wedding-dress-fitting.jpg'
import BottomRightImage from '../../public/mood/bespoke/IMG_5975.jpg'

// let TopLeftImage, TopRightImage, BottomLeftImage, BottomRightImage;

// if (imageSet === 'mood') {
//     TopLeftImage = '../../public/mood/bespoke/3a66b72d47890e697456a00f571105f8.jpg';
//     TopRightImage = '../../public/mood/bespoke/78c3906dbc503ebdcd50e2504235e0fe.jpg'
//     BottomLeftImage = '../../public/mood/bespoke/10-harley-viera-newton-wedding-dress-fitting.jpg'
//     BottomRightImage = '../../public/mood/bespoke/IMG_5975.jpg'
// } else {
//     TopLeftImage = '/unsplash/bespoke/3a66b72d47890e697456a00f571105f8.jpg';
//     TopRightImage = '/unsplash/bespoke/78c3906dbc503ebdcd50e2504235e0fe.jpg';
//     BottomLeftImage = '/unsplash/bespoke/10-harley-viera-newton-wedding-dress-fitting.jpg';
//     BottomRightImage = '/unsplash/bespoke/IMG_5975.jpg';
// }

const Bespoke = () => {
    return (
        <div className="flex flex-col min-h-screen relative">
            <Navbar />

            <PageHeader 
                image={ TopRightImage }
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
                    
                    {/* Top images */}
                    <div className="flex justify-center gap-4 p-4">
                        <Image 
                            src={TopLeftImage}
                            alt="Bespoke 1"
                            className="w-1/2 h-auto object-cover"
                        />
                        <div className="px-4 py-8 text-center font-georgia-italic max-w-3xl mx-auto">
                            <p className="text-sm md:text-base lg:text-base">
                                [Bespoke introduction] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis diam sit amet risus efficitur porta. Cras venenatis accumsan ornare. Aenean mattis ligula mi, vel gravida tellus porta eget. Proin posuere feugiat ante sed convallis.
                            </p>
                        </div>
                    </div>
                    
                    {/* Text */}
                    <div className="px-4 py-8 text-center font-georgia-italic max-w-3xl mx-auto">
                        <p className="text-sm md:text-base lg:text-base">
                        [Call to action] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis diam sit amet risus efficitur porta. Cras venenatis accumsan ornare. Aenean mattis ligula mi, vel gravida tellus porta eget. Proin posuere feugiat ante sed convallis. Donec vehicula sem eget mauris lobortis scelerisque. Aliquam finibus non quam non laoreet.
                        </p>
                    </div>

                    {/* Middle images */}
                    <div className="flex justify-center gap-4 p-4">
                        <Image 
                            src={BottomLeftImage}
                            alt="Bespoke 3"
                            className="w-1/2 h-auto object-cover"
                        />
                        <Image 
                            src={BottomRightImage}
                            alt="Bespoke 4"
                            className="w-1/2 h-auto object-cover"
                        />
                    </div>
                    
                    {/* Text */}
                    <div className="px-4 py-8 text-center font-georgia-italic max-w-3xl mx-auto">
                        <p className="text-sm md:text-base lg:text-base">
                        [Description of exerience] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis diam sit amet risus efficitur porta. Cras venenatis accumsan ornare. Aenean mattis ligula mi, vel gravida tellus porta eget. Proin posuere feugiat ante sed convallis. Donec vehicula sem eget mauris lobortis scelerisque. Aliquam finibus non quam non laoreet.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>

    );
};

export default Bespoke;
