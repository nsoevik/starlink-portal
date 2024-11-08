// check-external-images-loader.js
module.exports = function (source) {
    const externalImageRegex = /<img[^>]+src="(https?:\/\/[^"]+)"/g;
    const matches = [];
    let match;

    while ((match = externalImageRegex.exec(source)) !== null) {
        matches.push(match[1]);
    }

    if (matches.length > 0) {
        throw new Error(`External image URLs found: ${matches.join(', ')}`);
    }

    return source; // Return the source unchanged
};
