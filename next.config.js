/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	output: "standalone",
	compiler: {
		styledComponents: true,
	},
	experimental: {
		serverComponentsExternalPackages: ["typeorm"],
	},
	// webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
	// 	config.externals.push({
	// 		"utf-8-validate": "commonjs utf-8-validate",
	// 		bufferutil: "commonjs bufferutil",
	// 		"supports-color": "commonjs supports-color",
	// 	});
	// 	return config;
	// },
};

module.exports = nextConfig;
