import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    contentDispositionType: "inline",
    formats: ["image/avif", "image/webp"],
    disableStaticImages: true,
  },
};

export default nextConfig;
