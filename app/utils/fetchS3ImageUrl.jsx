//Function to fetch the signed URL from S3; calling the route
const fetchS3ImageUrl = async (imageName) => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    try {
        const response = await fetch(`${baseUrl}/api/images?key=${encodeURIComponent(imageName)}`);
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