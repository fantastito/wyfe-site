import Image from 'next/image';
import styles from '../LookbookGallery.module.css';

const LookbookGallery = ({ images }) => {
  return (
    <div className={styles.gallery}>
      {images.map((img) => (
        <div key={img.id} className={styles.galleryItem}>
        console.log(img.src);
          {img.src ? (
            <Image
            src={img.src}
            alt={img.alt || 'Image'}
            width={img.widt || 500}
            height={img.height || 500}
            layout="responsive"
            />
          ) : (
            <div>Image not available</div>
          )} 
        </div>
      ))}
    </div>
  );
};

export default LookbookGallery;