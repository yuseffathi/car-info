/** @type {import('next').NextConfig} */
const nextConfig = {
    output: {
        filename: "static/js/[name].js",
        chunkFilename: "static/js/[name].js",
        assetModuleFilename: "static/media/[name][ext]",
    },
};

export default nextConfig;
