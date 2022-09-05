/** @type {import('next').NextConfig} */
module.exports = {
	swcMinify: true,
	reactStrictMode: true,
	experimental: {
		images: {
			unoptimized: true
		}
	},
	assetPrefix: ''
}
