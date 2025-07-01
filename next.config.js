/** @type {import('next').NextConfig} */
console.log('BUILD: NEXT_PUBLIC_TAWK_TO_ID =', process.env.NEXT_PUBLIC_TAWK_TO_ID);

const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_TAWK_TO_ID: process.env.NEXT_PUBLIC_TAWK_TO_ID,
  },
};

module.exports = nextConfig;
