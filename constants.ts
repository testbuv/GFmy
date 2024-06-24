export const routes = [
  {
    label: "Dashboard",
    path: "/dashboard",
    description: "Dashboard",
  },

  {
    label: "Generate images or designs",
    path: "/stable-diffusion",
    description: "Generate images and designs from the text prompt.",
    image: "https://tpstore-media.s3.eu-north-1.amazonaws.com/DALL%C2%B7E+2024-06-19+21.37.53+-+Vertical+aspect+ratio+architecture+photos+of+London%2C+featuring+different+sights+and+bridges%2C+taken+with+a+Mamya+650D+camera+using+Cinestill+50+film.+T.webp",
  },
  {
    label: "Upscale your images",
    path: "/upscale",
    description: "Enlarge your images up to 4 times with a noise reduction support out of the box.",
    image: "https://tpstore-media.s3.eu-north-1.amazonaws.com/DALL%C2%B7E+2024-06-19+21.37.55+-+Vertical+aspect+ratio+architecture+photos+of+London+buildings%2C+taken+with+a+Mamya+650D+camera+using+Cinestill+50+film.+The+images+should+capture+the+u.webp",
  },
  {
    label: "Remove the background layer",
    path: "/bg-remove",
    description: "Manipulate your images to remove the background layer.",
    image: "https://tpstore-media.s3.eu-north-1.amazonaws.com/remove-bg.png",
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

