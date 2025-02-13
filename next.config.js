/** @type {import("next").NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ["ru", "en", "fr", "ky"],
		defaultLocale: "ky",
		localeDetection: false
	}
};

module.exports = nextConfig;
