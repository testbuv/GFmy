/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "source.unsplash.com",
      "pbxt.replicate.delivery",
      "replicate.delivery",
      "res.cloudinary.com",
      "store-diet.s3.eu-north-1.amazonaws.com",
      "tpstore.s3.eu-north-1.amazonaws.com",
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
