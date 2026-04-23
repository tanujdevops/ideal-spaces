import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn-icons-png.flaticon.com' },
    ],
  },
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
      { source: '/properties', destination: '/spaces', permanent: true },
      { source: '/properties-listing', destination: '/spaces', permanent: true },
      { source: '/property/:id', destination: '/spaces', permanent: true },
      { source: '/properties/single/:id', destination: '/spaces', permanent: true },
      { source: '/ai-hub', destination: '/events', permanent: true },
      { source: '/ai-property-hub', destination: '/events', permanent: true },
      { source: '/ai-agent', destination: '/events', permanent: true },
      { source: '/login', destination: '/contact', permanent: true },
      { source: '/signin', destination: '/contact', permanent: true },
      { source: '/signup', destination: '/contact', permanent: true },
      { source: '/forgot-password', destination: '/contact', permanent: true },
      { source: '/reset/:token', destination: '/contact', permanent: true },
      { source: '/verify-email/:token', destination: '/contact', permanent: true },
      { source: '/add-property', destination: '/contact', permanent: true },
      { source: '/edit-property/:id', destination: '/contact', permanent: true },
      { source: '/my-listings', destination: '/contact', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
    ];
  },
};

export default nextConfig;
