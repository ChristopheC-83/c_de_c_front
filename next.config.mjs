/** @type {import('next').NextConfig} */
const nextConfig = {
  // output:'export',
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com",
        },
        {
          protocol: "https",  
          hostname: "mycloud.barpat.fun",  
        },
      ],
    },
  };
  
  export default nextConfig;