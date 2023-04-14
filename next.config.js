/** @type {import("next").NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ["ru", "en", "fr"],
		defaultLocale: "ru",
		localeDetection: false
	}
};

module.exports = nextConfig;
