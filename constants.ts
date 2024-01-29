export const routes = [
  {
    label: "Dashboard",
    path: "/dashboard",
    description: "Dashboard",
  },

  {
    label: "Image Generation",
    path: "/stable-diffusion",
    description: "Generate Art from the text prompt.",
    image: "https://store-diet.s3.eu-north-1.amazonaws.com/imagegen-dashboard.png",
  },
  {
    label: "Image Upscale",
    path: "/upscale",
    description: "Upscale your Image",
    image: "https://store-diet.s3.eu-north-1.amazonaws.com/upscale-dashboard.png",
  },
  {
    label: "QR Code Generator",
    path: "/qrgen",
    description: "Generate Stylised QR Code from Link/Text",
    image: "https://store-diet.s3.eu-north-1.amazonaws.com/qr-dashboard.png",
  },
  {
    label: "Background Remove",
    path: "/bg-remove",
    description: "Remove Background from your Image",
    image: "https://store-diet.s3.eu-north-1.amazonaws.com/bg-remove-dashboard.png",
  },
  {
    label: "Settings",
    path: "/settings",
    description: "Settings",
  },
];

export const tools = routes.filter(
  (route) => route.label !== "Settings" && route.label !== "Dashboard",
);
export const IS_BROWSER = typeof window !== "undefined"

