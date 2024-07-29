import React from "react";
import Image from 'next/image';

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import TopLeftImage from '../../public/bespoke/3a66b72d47890e697456a00f571105f8.jpg'
import TopRightImage from '../../public/bespoke/78c3906dbc503ebdcd50e2504235e0fe.jpg'
import BottomLeftImage from '../../public/bespoke/10-harley-viera-newton-wedding-dress-fitting.jpg'
import BottomRightImage from '../../public/bespoke/IMG_5975.jpg'

const Bespoke = () => {
    return (
        <div className="flex flex-col min-h-screen relative">
            <Navbar />

            {/* Page content */}
            <main className="flex-1">
                <div className="container mx-auto px-4 max-w-screen-lg">
                    {/* Top images */}
                    <div className="flex justify-center gap-4 p-4">
                        <Image 
                            src={TopLeftImage}
                            alt="Bespoke 1"
                            className="w-1/2 h-auto object-cover"
                        />
                        <Image 
                            src={TopRightImage}
                            alt="Bespoke 1"
                            className="w-1/2 h-auto object-cover"
                        />
                    </div>
                    
                    {/* Text */}
                    <div className="px-4 py-8 text-center font-georgia-italic">
                        <p className="text-sm md:text-base lg:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor, odio id iaculis aliquet, eros nibh suscipit ex, a fringilla felis urna in dolor. In tempor risus lorem, eu ultrices dui sollicitudin eget. In id libero condimentum ante malesuada viverra. In in dui et risus commodo porttitor. Donec id ipsum enim. Donec pulvinar ut orci lacinia scelerisque. Mauris sed lorem eu elit lacinia convallis non at ante.
                        </p>
                    </div>

                    {/* Middle images */}
                    <div className="flex justify-center gap-4 p-4">
                        <Image 
                            src={BottomLeftImage}
                            alt="Bespoke 1"
                            className="w-1/2 h-auto object-cover"
                        />
                        <Image 
                            src={BottomRightImage}
                            alt="Bespoke 1"
                            className="w-1/2 h-auto object-cover"
                        />
                    </div>
                    
                    {/* Text */}
                    <div className="px-4 py-8 text-center font-georgia-italic">
                        <p className="text-sm md:text-base lg:text-base">
                        In venenatis, quam a sodales cursus, dui dui pulvinar nunc, ut pretium velit mi id odio. Mauris tincidunt orci ac ante mollis faucibus. Pellentesque ac augue sagittis, elementum magna nec, cursus massa. Pellentesque justo lectus, lobortis sed vulputate vel, ullamcorper nec ante. Maecenas sit amet orci at tortor gravida vehicula vel at diam. Pellentesque semper accumsan nibh, et sollicitudin lacus tincidunt a. Nunc luctus sagittis libero non porttitor.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>

    );
};

export default Bespoke;
