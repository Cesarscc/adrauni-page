/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "images.prismic.io",
      },
      {
        hostname: "adrauni.prismic.io",
      },
      {
        hostname: "adrauni.cdn.prismic.io",
      },
    ],
  },
};

export default nextConfig;
