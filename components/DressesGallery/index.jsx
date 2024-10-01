import Image from 'next/image';

const DressesGallery = ({ images }) => {
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {images.map((img) => (
            <div key={img.id} className="relative group h-120 w-auto">
            {img.src ? (
                <>
                    <Image
                        src={img.src}
                        alt={img.alt || 'Image'}
                        width={img.width || 240}
                        height={img.height || 320}
                        className="w-full h-full object-cover"
                    />
                </>
            ) : (
                <div>Image not available</div>
            )}
            </div>
        ))}
        </div>
    );
};

export default DressesGallery;
