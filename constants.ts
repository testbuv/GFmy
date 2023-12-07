export const MAX_FREE_COUNT = 15;

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
    image: "/dashboard/imagegen-dashboard.png",
  },
  {
    label: "Image Upscale",
    path: "/upscale",
    description: "Upscale your Image",
    image: "/dashboard/upscale-dashboard.png",
  },
  {
    label: "QR Code Generator",
    path: "/qrgen",
    description: "Generate Stylised QR Code from Link/Text",
    image: "/dashboard/qr-dashboard.png",
  },
  {
    label: "Background Remove",
    path: "/bg-remove",
    description: "Remove Background from your Image",
    image: "/dashboard/bg-remove-dashboard.png",
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
