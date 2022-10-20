# bug-emotion-forwardRef-hydration

1. `npm ci`
2. `npm run dev`
3. Load http://localhost:3000 (I'm using Chrome 106 on MacOS)
4. Check the console

```
Warning: Prop `className` did not match. Server: "css-5nc299-Button" Client: "css-zanegv"
    at button
    at eval (webpack-internal:///./node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js:57:66)
    at _c
    at div
    at Index
    at App (webpack-internal:///./node_modules/next/dist/pages/_app.js:94:5)
    at ErrorBoundary (webpack-internal:///./node_modules/next/dist/compiled/@next/react-dev-overlay/dist/client.js:8:20742)
    at ReactDevOverlay (webpack-internal:///./node_modules/next/dist/compiled/@next/react-dev-overlay/dist/client.js:8:23635)
    at Container (webpack-internal:///./node_modules/next/dist/client/index.js:111:5)
    at AppContainer (webpack-internal:///./node_modules/next/dist/client/index.js:296:24)
    at Root (webpack-internal:///./node_modules/next/dist/client/index.js:504:25) 

See more info here: https://nextjs.org/docs/messages/react-hydration-error
```