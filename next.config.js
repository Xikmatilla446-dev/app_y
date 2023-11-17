/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate-plugin");

module.exports = nextTranslate({
	reactStrictMode: true,
	distDir: "build",
	typescript: {
		ignoreBuildErrors: true
	},
	eslint: {
		ignoreDuringBuilds: true
	},
	i18n: {
		locales: ["uz", "ru"],
		defaultLocale: "uz",
		localeDetection: false
	},
	images: {
		domains: ["yangiyol.mylab.uz"]
	},
	experimental: {
		appDir: true,
		async headers() {
			return [
				{
					source: "/api/:path*",
					headers: [
						{ key: "Access-Control-Allow-Credentials", value: "true" },
						{ key: "Access-Control-Allow-Origin", value: "*" },
						{ key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
						{
							key: "Access-Control-Allow-Headers",
							value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
						}
					]
				}
			];
		}
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ["@svgr/webpack"]
		});

		return config;
	}
});
