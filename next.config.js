// const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config) => {
		/* On `node-fetch` v2, that `supabase-js` uses,
		`encoding` package was optionally required for `.textConverted`
		which means it wasn't in `node-fetch` deps.
		See: https://github.com/node-fetch/node-fetch/issues/412.
		Since `encoding` is not part of the deps by default, when using with webpack,
		it will raise a warning message.
		This can be ignored as it doesn't prevent anything to work well. */
		config.ignoreWarnings = [
			{ module: /node_modules\/node-fetch\/lib\/index\.js/ },
			{ file: /node_modules\/node-fetch\/lib\/index\.js/ },
		];

		return config;
	},
	reactStrictMode: true,
	output: "standalone",
	compiler: {
		styledComponents: true,
	},
	// experimental: {
	// 	webpackBuildWorker: true,
	// },
	// webpack: (config) => {
	// 	config.ignoreWarnings = [
	// 		{ module: /node_modules\/typeorm\/util\/ImportUtils\.js/ },
	// 		{
	// 			module:
	// 				/node_modules\/typeorm\/util\/DirectoryExportedClassesLoader\.js/,
	// 		},
	// 		{ module: /node_modules\/typeorm\/platform\/PlatformTools\.js/ },
	// 		{
	// 			module:
	// 				/node_modules\/typeorm\/connection\/ConnectionOptionsReader\.js/,
	// 		},
	// 	];

	// 	config.plugins.push(
	// 		new FilterWarningsPlugin({
	// 			exclude: [
	// 				/mongodb/,
	// 				/mssql/,
	// 				/mysql/,
	// 				/mysql2/,
	// 				/oracledb/,
	// 				/pg/,
	// 				/pg-native/,
	// 				/pg-query-stream/,
	// 				/react-native-sqlite-storage/,
	// 				/redis/,
	// 				/sqlite3/,
	// 				/sql.js/,
	// 				/typeorm-aurora-data-api-driver/,
	// 				/hdb-pool/,
	// 				/spanner/,
	// 				/hana-client/,
	// 			],
	// 		})
	// 	);
	// 	return config;
	// },
};

module.exports = nextConfig;
