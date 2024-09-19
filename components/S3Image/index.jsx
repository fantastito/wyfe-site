// "use client"

// import Image from 'next/image'
// import React, { useState, useEffect } from 'react';

// //Image fetch call
// const getImageUrl = async (imageName) => {
//     try {
//         const response = await fetch(`http://localhost:3000/api/images?key=${encodeURIComponent(imageName)}`);
//         // const response = await fetch('http://wyfe.co.uk/api/images?key=${encodeURIComponent(imageName)}');
//         if (!response.ok) {
//             throw new Error('Failed to fetch image');
//         }
//         const data = await response.text()
//         return data
//     } catch (error) {
//         console.error('Error fetching image:', error);
//         return null
//     }
// };

// //Image return logic
// const S3Image = ({ imageName }) => {
//     const [imageUrl, setImageUrl] = useState(null);

//     useEffect(() => {
//         const fetchImageUrl = async () => {
//             const url = await getImageUrl(imageName);
//             setImageUrl(url);
//         };
    
//         fetchImageUrl();
//     }, [imageName]);

//     return (
//         imageUrl
//     );
// };

// export default S3Image;

// components/S3Image/index.jsx

// Helper function to fetch the signed URL from your API
const fetchS3ImageUrl = async (imageName) => {
    try {
        const response = await fetch(`/api/images?key=${encodeURIComponent(imageName)}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch image URL for ${imageName}`);
        }
        const url = await response.text();
        return url;
    } catch (error) {
        console.error(`Error fetching image from S3:`, error);
        return null;
    }
};

export default fetchS3ImageUrl;

