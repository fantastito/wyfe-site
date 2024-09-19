/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'wyfe-images.s3.eu-west-2.amazonaws.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  };

export default nextConfig;
