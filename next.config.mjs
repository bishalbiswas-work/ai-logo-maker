/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async redirects() {
        return [];
    },
    functions: {
        'api/ai-logo-model': {
            maxDuration: 60, // Ensure it's between 1 and 60 seconds for Hobby plan
        },
    },
};

export default nextConfig;
