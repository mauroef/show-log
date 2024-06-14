/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/**',
      },
      {
        protocol: 'https',
        hostname: 'media.themoviedb.org',
        port: '',
        pathname: '/t/**',
      }
    ],
  },
  reactStrictMode: false // changed to true on production environment
};

export default nextConfig;
