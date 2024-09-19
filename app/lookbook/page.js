import React from "react";
import Image from 'next/image';

import Footer from '../../components/Footer'
import PageHeader from '../../components/PageHeader'
import S3Image from '../../components/S3Image'


import TopImage from '../../public/lookbook/50dab22fc3e5b30a734eb7f183a9a2f3.jpg'
import HeaderImage from '../../public/lookbook/dc10eb9d22316387842de6faae0dc912.jpg'
import BottomLeftImage from '../../public/bespoke/the_cat_small.jpg'
import BottomRightImage from '../../public/bespoke/10-harley-viera-newton-wedding-dress-fitting.jpg'

const Lookbook = () => {
    return (
        <div className="flex flex-col min-h-screen relative">
            {/* <Navbar /> */}

            <PageHeader 
                image={ HeaderImage }
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
                        {/* <Image 
                            src={TopImage}
                            alt="Lookbook 1"
                            className="w-1/2 h-auto object-cover"
                        /> */}
                        <S3Image
                            imageName="wyfe_hair.jpg"
                            alt="Lookbook 1"
                            width={500}
                            height={600}
                        />
                        <div className="px-4 py-8 text-center font-georgia-italic max-w-3xl mx-auto">
                            <p className="text-sm md:text-base lg:text-base">
                            [Description of exerience] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis diam sit amet risus efficitur porta. Cras venenatis accumsan ornare. Aenean mattis ligula mi, vel gravida tellus porta eget. Proin posuere feugiat ante sed convallis. Donec vehicula sem eget mauris lobortis scelerisque. Aliquam finibus non quam non laoreet.
                            </p>
                        </div>
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

export default Lookbook;
