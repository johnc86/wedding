module.exports = function (eleventyConfig) {
    // Output directory: _site
    // Copy `img/` to `_site/img`
    eleventyConfig.addPassthroughCopy("assets/");

    eleventyConfig.setBrowserSyncConfig({
        files: [
            './_site/css/**/*.css',
            './assets'
        ]
    });
};

module.exports = function (eleventyConfig) {
    return {
        dir: {
            input: "website",
            output: "docs"
        }
    }
};