import LookbookGallery from '../../components/LookbookGallery'
import Footer from '../../components/Footer'
import PageHeader from '../../components/PageHeader'
import fetchS3ImageUrl from '../utils/fetchS3ImageUrl'
import dressesData from '../dresses.json'
import headerImage from '../../public/wyfe_woman_lana_del_ray.jpg'

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
                <LookbookGallery 
                    images={ images } 
                />
            </main>

            <Footer />
        </div>

    );
};
