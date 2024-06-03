/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	eslint: {
		ignoreDuringBuilds: true
	},

	images: {
		dangerouslyAllowSVG: true,

		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'dummyimage.com'
			},

			{
				protocol: 'https',
				hostname: 'ui-avatars.com'
			}
		]
	}
};

export default nextConfig;
