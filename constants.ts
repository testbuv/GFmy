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
    image: "https://tpstore-media.s3.eu-north-1.amazonaws.com/DALL%C2%B7E+2024-06-19+21.37.53+-+Vertical+aspect+ratio+architecture+photos+of+London%2C+featuring+different+sights+and+bridges%2C+taken+with+a+Mamya+650D+camera+using+Cinestill+50+film.+T.webp",
  },
  {
    label: "Image Upscale",
    path: "/upscale",
    description: "Upscale your Image",
    image: "https://tpstore-media.s3.eu-north-1.amazonaws.com/DALL%C2%B7E+2024-06-19+21.37.55+-+Vertical+aspect+ratio+architecture+photos+of+London+buildings%2C+taken+with+a+Mamya+650D+camera+using+Cinestill+50+film.+The+images+should+capture+the+u.webp",
  },
  {
    label: "Background Remove",
    path: "/bg-remove",
    description: "Remove Background from your Image",
    image: "https://tpstore-media.s3.eu-north-1.amazonaws.com/DALL%C2%B7E+2024-06-19+21.38.03+-+Vertical+aspect+ratio+architecture+photos+of+Mexico+City%2C+featuring+different+sights+and+landmarks%2C+taken+with+a+Mamya+650D+camera+using+Cinestill+50+.webp",
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

