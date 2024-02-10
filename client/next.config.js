/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "randomuser.me",
      "raw.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
