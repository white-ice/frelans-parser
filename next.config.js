/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
			issuer: /\.(js|ts)x?$/,
			use: ['@svgr/webpack'],
		})

		return config
	}
}

module.exports = nextConfig
