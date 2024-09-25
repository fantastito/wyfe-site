import Image from 'next/image';
import styles from '../LookbookGallery.module.css';

const LookbookGallery = ({ images }) => {
  return (
    <div className={styles.gallery}>
      {images.map((img) => {
        return (
          <div key={img.id} className={styles.galleryItem}>
            {img.src ? (
              <Image
                src={img.src}
                alt={img.alt || 'Image'}
                width={img.width || 500}
                height={img.height || 500}
                // layout="responsive"
                className={styles.galleryItemImg}
              />
            ) : (
              <div>Image not available</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LookbookGallery;
