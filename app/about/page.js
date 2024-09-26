import Image from 'next/image';

import PageHeader from '../../components/PageHeader'
import Footer from '../../components/Footer'
import fetchS3ImageUrl from '../utils/fetchS3ImageUrl'

const HeaderImage = 'wyfe_champagne_glass.jpg';
const TopLeftImage = 'wyfe_woman_dress_bows.jpg';
const TopRightImage = 'wyfe_champagne_glass.jpg';
const BottomLeftImage = 'wyfe_hair.jpg';
const BottomRightImage = 'wyfe_legs.jpg';

const imageNames = [HeaderImage, TopLeftImage, TopRightImage, BottomLeftImage, BottomRightImage];

const fetchImages = async (imageNames) => {
    try {
        const imageUrls = await Promise.all(
            imageNames.map(async (imageName) => {
                const url = await fetchS3ImageUrl(imageName);
                return {
                name: imageName, url
                };
            })
        );
        return imageUrls;
    } catch (error) {
        console.error('Error fetching S3 URLs:', error);
        return [];
    }
};

export default async function About () {
    const imageUrls = await fetchImages(imageNames);

    return (
        <div className="flex flex-col min-h-screen relative">
            {/* Navbar */}
            <PageHeader 
                image={ imageUrls[0].url }
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
                                src={ imageUrls[1].url }
                                alt="About 1"
                                width="472"
                                height="600"
                                className="w-full h-full object-cover aspect-square"
                            />
                        </div>      
                        <div className="w-1/2">
                            <Image 
                                src={ imageUrls[2].url }
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
                                src={ imageUrls[3].url }
                                alt="About 3"
                                width="472"
                                height="600"
                                className="w-full h-full object-cover aspect-square"
                            />
                        </div>      
                        <div className="w-1/2">
                            <Image 
                                src={ imageUrls[4].url }
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