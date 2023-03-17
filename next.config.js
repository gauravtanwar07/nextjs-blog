  module.exports = (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        experimental:{
            appDir: true,
        }
    }
    return nextConfig
  }