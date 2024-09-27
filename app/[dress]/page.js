import Footer from '../../components/Footer'
import PageHeader from '../../components/PageHeader'
import fetchS3ImageUrl from '../utils/fetchS3ImageUrl'
import dressesData from '../dresses.json'
import headerImage from '../../public/wyfe_woman_lana_del_ray.jpg';

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

// Statically generate routes at build
export async function generateStaticParams() {
    return dressesData.map((dress) => ({
      slug: dress.name.toLowerCase(),
    }))
};

export default function Page({ params}) {
    const { slug } = params;

    const dress = dressesData.find((dress) => dress.name.toLowerCase() === slug);

    if (!dress) {
        // Handle if no matching dress is found
        return <div>Dress not found</div>;
    }

    return (
        <div className="flex flex-col min-h-screen relative">
            {/* Navbar */}
            <PageHeader 
                image={ headerImage }
            />

            {/* Page content */}
            <main className="flex-1">
                <div className="container mx-auto px-4 max-w-screen-lg">
                    {/* Text */}
                    <div className="px-4 py-8 text-center font-georgia-italic max-w-3xl mx-auto">
                        <p className="text-sm md:text-base lg:text-base">
                        [Dress introduction] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis diam sit amet risus efficitur porta. Cras venenatis accumsan ornare. Aenean mattis ligula mi, vel gravida tellus porta eget. Proin posuere feugiat ante sed convallis.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}