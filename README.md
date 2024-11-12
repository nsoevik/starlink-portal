# Overview
This repository contains an example of a Starlink carptive portal webpage.
Webpack is used to bundle depedencies into a single index.html file (See https://webpack.js.org/).

# Setup Steps
1. Install node v22.7.0.
2. Run `npm install`.
3. Run `npm run build`. Generates a single `index.html` file which can be uploaded to starlink.com.

# Webpage Restrictions
1. The size of the generated iwebpage is limited to 8MB. 
2. Assets must be loaded locally before budnling, no references to external URLs.
