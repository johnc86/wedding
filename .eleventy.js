module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("website/img");
    eleventyConfig.addPassthroughCopy("website/js");
    eleventyConfig.setBrowserSyncConfig({
        files: [
            './docs/css/*.css',
        ]
    });

    eleventyConfig.addCollection("content_en", function (collection) {
        return collection.getFilteredByGlob("./website/content/pl/*.md");
    });
    eleventyConfig.addCollection("content_pl", function (collection) {
        return collection.getFilteredByGlob("./website/content/en/*.md");
    });
    
    return {
        dir: {
            input: "website",
            output: "docs"
        }
    }

    

};