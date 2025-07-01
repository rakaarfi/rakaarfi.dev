/** @type {import('next').NextConfig} */
console.log('BUILD: NEXT_PUBLIC_TAWK_TO_ID =', process.env.NEXT_PUBLIC_TAWK_TO_ID);

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
