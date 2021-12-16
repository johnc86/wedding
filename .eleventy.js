module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("website/img");
    eleventyConfig.addPassthroughCopy("website/js");

    eleventyConfig.setBrowserSyncConfig({
        files: [
            './docs/css/*.css',
        ]
    });
    
    return {
        dir: {
            input: "website",
            output: "docs"
        }
    }
};