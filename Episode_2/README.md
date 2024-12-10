There are two types of dependencies:
- Developer dependencies - which are only required in the development phase
- Normal dependencies - the dependencies that are also required on the production level.

Earlier, we use react and react-dom using cdn, now we will use npm to install those packages, and have the same functionality.

npm i react
npm i react-dom

import React from "react"
import ReactDom from "react-dom"

Use type = "module" to avoid js file being read as a normal browser script.

# Parcel:

- Dev build
- HMR
- local server
- File Watching algorithm - written in CSS
- Caching
- Image Optimization
- Bundling
- Minification
- Compress
- Remove unused code for you - Tree hashing