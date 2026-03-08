/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',      // Ye static HTML generate karega
  images: {
    unoptimized: true,   // GitHub Pages standard image optimization support nahi karta
  },
  // Agar aapka URL username.github.io/repo-name/ hai, to niche wala line add karein:
  // basePath: '/bunkers-point',
};
module.exports = nextConfig;
