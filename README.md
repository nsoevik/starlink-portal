# starlink-portal


It is important your output is only a single index.html that has no outside references. To verify this run the steps below and open your index.html file in a web browser. Open devtools, then the network panel and verify the only network request made is to index.html

## Setup Steps
1. Install node v22.7.0
2. Run `npm install`
3. Modify files in `src` folder as needed
4. Run `npm run build` this will generate the `dist/index.html` file which you can upload to starlink.com


## Common Errors
> ERROR in asset size limit: The following asset(s) exceed the recommended size limit
For the optimial customer experience custom webpages are limited to 8MB. Please compress assets (images, etc) and verify you are only including the minimum required javascript and css.

> Can't resolve './assets/images/image_name.png' in '...'
Make sure the path to your asset is correct

> Error: External image URLs found: https://www.starlink.com/...
Download the image asset and include it in `/src/assets/images/`
Starlink inflight wifi will not be able to access web assets over restricted geo locations so it's important all assets are local
