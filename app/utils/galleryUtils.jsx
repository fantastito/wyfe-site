// import dressesData from '../data/dresses.json';
// import fetchS3ImageUrl from '../utils/fetchS3ImageUrl'; // Function to get signed URLs

// export async function getStaticProps() {
//   const images = await Promise.all(
//     dressesData.map(async (dress) => {
//       const imagesWithUrls = await Promise.all(
//         dress.images.map(async (imageName) => {
//           const imageUrl = await fetchS3ImageUrl(imageName);
//           return {
//             id: imageName,   // Unique id based on image name
//             src: imageUrl,   // Signed S3 URL
//             alt: dress.name, // Alt text from dress name
//             // width: 600,      // Example image width (adjust as needed)
//             // height: 800      // Example image height (adjust as needed)
//           };
//         })
//       );
//       return imagesWithUrls;
//     })
//   );

//   // Flatten the nested arrays into one array of images
//   const flattenedImages = images.flat();

//   return {
//     props: {
//       images: flattenedImages,
//     },
//   };
// }
