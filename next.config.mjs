/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Évite les 404 de /_next/image en prod Vercel : URLs Unsplash servies directement
    unoptimized: true,
  },
};

export default nextConfig;
