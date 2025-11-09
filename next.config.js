/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    // Only add basePath if deploying to a project repository (not username.github.io)
    // basePath: '/your-repo-name',
};

module.exports = nextConfig;
