import Footer from '../../components/Footer'
import PageHeader from '../../components/PageHeader'
import fetchS3ImageUrl from '../utils/fetchS3ImageUrl'
import dressesData from '../dresses.json'
import DressesGallery from '../../components/DressesGallery'

//Image fetching inputting dress
const fetchImages = async (dress) => {
    try {
        // Fetch images for the provided dress
        const imagesWithUrls = await Promise.all(
            dress.images.map(async (imageName) => {
                const imageUrl = await fetchS3ImageUrl(imageName);
                return {
                    id: imageName,
                    src: imageUrl,
                    alt: dress.name,
                    width: 600,
                    height: 800,
                };
            })
        );
        
        return imagesWithUrls;
    } catch (error) {
        console.error('Error fetching images:', error);
        return [];
    }
};

// Statically generate routes at build
export async function generateStaticParams() {
    return dressesData.map((dress) => ({
        slug: dress.name.toLowerCase(),
    }));
}

// Page return
export default async function Page({ params }) {
    // Allow NextJS recognise the URL as [slug] folder
    const { slug } = params;

    // Use find() to search for a dress by name (ignoring case) from the dressesData
    const dress = dressesData.find((dress) => {
        return dress.name.toLowerCase() === slug;
    });

    if (!dress) {
        // Handle no matches --> To do: Create page not found page
        return <div>Dress not found</div>;
    }
    
    // Fetch dress images' URLs from dressData using dress
    const imageUrls = await fetchImages(dress);
    
    return (
        <div className="flex flex-col min-h-screen relative">
            {/* Navbar */}
            <PageHeader 
                image={ imageUrls[2] }
                title={ dress.name } //pass in the dress name as title
            />

            {/* Page content */}
            <main className="flex-1">
                <div className="container mx-auto px-4 max-w-screen-lg">
                    
                    {/* Intro text */}
                    <div className="px-4 py-8 text-center font-georgia-italic max-w-3xl mx-auto">
                        <p className="text-sm md:text-base lg:text-base">
                        { dress.intro }
                        </p>
                    </div>

                    {/* Dresses gallery */}
                    <DressesGallery
                        images = { imageUrls }
                    />

                </div>
            </main>

            <Footer />
        </div>
    );
}