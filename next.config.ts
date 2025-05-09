// next.config.mjs
import withPWA from "next-pwa";

const nextConfig = {};

export default withPWA({
    dest: "public",
    register: true,
    skipWaiting: true,
})(nextConfig);
