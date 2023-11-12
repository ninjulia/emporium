const eleventySass = require('@11tyrocks/eleventy-plugin-sass-lightningcss');

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(eleventySass);
	eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

	eleventyConfig.addPassthroughCopy('./src/assets');
	eleventyConfig.addPassthroughCopy({ './theme/favicon': './' });

	return {
		dir: {
			input: 'src',
			output: 'public',
		},
	};
};
