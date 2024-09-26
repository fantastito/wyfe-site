import Image from 'next/image';

import Footer from '../../components/Footer'
import PageHeader from '../../components/PageHeader'
import fetchS3ImageUrl from '../utils/fetchS3ImageUrl'

const HeaderImage = 'wyfe_champagne_glass.jpg';
const TopImage = 'wyfe_woman_dress.jpg';
const BottomLeftImage = 'wyfe_cat_small.jpg';
const BottomRightImage = 'wyfe_earring.jpg';

const imageNames = [HeaderImage, TopImage, BottomLeftImage, BottomRightImage];

// Email button backend
const email = "hello@wyfe.co.uk"
const subject = "Tell me about bespoke dresses"
const body = `Hi Wyfe,\n\nI'd like to know more about your bespoke dresses.\n\nWedding date: [When is your wedding?]\nBudget: [What is your budget?]\nWhat I'm looking for: [What ideas do you have?]\n\nThanks,`
const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

//Image fetching
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

export default async function Bespoke () {
    const imageUrls = await fetchImages(imageNames);
    
    return (
        <div className="flex flex-col min-h-screen relative">
            {/* <Navbar /> */}

            <PageHeader 
                image={ imageUrls[0].url }
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
                            src={imageUrls[1].url}
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
                                src={imageUrls[2].url}
                                alt="Bespoke 1"
                                width="472"
                                height="600"
                                className="w-full h-full object-cover"
                            />
                        </div>      
                        <div className="w-1/2">
                            <Image 
                                src={imageUrls[3].url}
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
