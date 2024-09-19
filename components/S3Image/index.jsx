"use client"

import Image from 'next/image'
import React, { useState, useEffect } from 'react';

//Image fetch call
const getImage = async (imageName) => {
    try {
        const response = await fetch(`http://localhost:3000/api/images?key=${encodeURIComponent(imageName)}`);
        // const response = await fetch('http://wyfe.co.uk/api/images?key=${encodeURIComponent(imageName)}');
        if (!response.ok) {
            throw new Error('Failed to fetch image');
        }
        const data = await response.text()
        return data
    } catch (error) {
        console.error('Error fetching image:', error);
        return null
    }
};

//Image return logic
const S3Image = ({ imageName, alt, width = 1200, height = 1200 }) => {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            const url = await getImage(imageName);
            setImageUrl(url);
        };
    
        fetchImage();
    }, [imageName]);
    
    if (!imageUrl) {
        return <p>Loading image...</p>;
    }

    return (
        <Image
            src={imageUrl}
            alt={alt}
            width={width}
            height={height}
        />
    );
};

export default S3Image;