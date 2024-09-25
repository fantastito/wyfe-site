import LookbookGallery from '../../components/LookbookGallery'
import Footer from '../../components/Footer'
import PageHeader from '../../components/PageHeader'
import fetchS3ImageUrl from '../utils/fetchS3ImageUrl'
import dressesData from '../dresses.json'
import headerImage from '../../public/wyfe_woman_lana_del_ray.jpg'

//Fetch gallery images, taking dresses from JSON and getting URLs for each
const fetchImages = async () => {
    const images = await Promise.all(
      dressesData.map(async (dress) => {
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
      })
    );
  
    // Flatten nested arrays into one array
    return images.flat();
};

export default async function Lookbook () {
    const images = await fetchImages();

    return (
        <div className="flex flex-col min-h-screen relative">
            <PageHeader 
                image={ headerImage }
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

                    <LookbookGallery 
                        images={ images } 
                    />

                </div>

                
            </main>

            <Footer />
        </div>

    );
};
