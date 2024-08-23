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
      "tpstore-media.s3.eu-north-1.amazonaws.com",
    ],
  },
  compiler: {
    styledComponents: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;