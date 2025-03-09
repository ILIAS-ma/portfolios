/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'i.imgur.com',
      'placehold.co',
      'via.placeholder.com',
      'images.unsplash.com',
    ],
  },
}

module.exports = nextConfig
