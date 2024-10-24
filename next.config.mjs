/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nuvuqitrmthnabmdbdkr.supabase.co",
        port: "",
        pathname: "/storage/v1/object/sign/cabins-image/**",
      },
    ],
  },
  //output: "export",
};

export default nextConfig;
