const eleventySass = require('@11tyrocks/eleventy-plugin-sass-lightningcss');

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(eleventySass);
	eleventyConfig.addPassthroughCopy('./src/assets');
	eleventyConfig.addPassthroughCopy({ './favicon': './' });

	return {
		dir: {
			input: 'src',
			output: 'public',
		},
	};
};
