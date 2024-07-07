/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://192.168.4.1/:path*', // Replace with your ESP32 IP address
      },
    ];
},
};

export default nextConfig;
