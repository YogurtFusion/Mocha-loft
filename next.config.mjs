/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  // This tells Next.js: "I trust my phone accessing this IP"
  allowedDevOrigins: ["http://192.168.29.10:3000", "http://localhost:3000"],
};

export default nextConfig;