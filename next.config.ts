/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Inglés
      { source: '/about', destination: '/', permanent: true },
      { source: '/faq', destination: '/#faq', permanent: true },
      { source: '/contact', destination: '/#contact', permanent: true },
      { source: '/portfolio', destination: '/', permanent: true },

      // Español
      { source: '/es/about', destination: '/es', permanent: true },
      { source: '/es/faq', destination: '/es#faq', permanent: true },
      { source: '/es/contact', destination: '/es#contact', permanent: true },
      { source: '/es/portfolio', destination: '/es', permanent: true },

      // Restos de una estructura vieja (/en/*) que ya no existe como carpeta
      { source: '/en/:path*', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;