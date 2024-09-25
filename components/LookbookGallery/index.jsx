import Image from 'next/image';
import styles from '../LookbookGallery.module.css';

const LookbookGallery = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((img) => (
        <div key={img.id} className="relative group w-60 h-80">
          {img.src ? (
            <>
              <Image
                src={img.src}
                alt={img.alt || 'Image'}
                width={img.width || 240}
                height={img.height || 320}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <span className="text-white text-lg font-georgia-italic">{img.alt}</span>
              </div>
            </>
          ) : (
            <div>Image not available</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LookbookGallery;
