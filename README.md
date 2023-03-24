#  KeyMask frontend demo

Configured with:
- Webpack
- ESLint
- Redux-bundler
- Money-clip (local caching)
- Internal-nav-helper (routing)

It also has Prettier installed, but removed usage (in lint config)

- // sinks (updating immutable state objects and arrays)
- // redux-persist-middleware?
- // milliseconds
- // query-string
- // feather-route-matcher
- // todo jest
- // todo testing-library
- // todo cypress

## Notes

Open dev tools to see output of debug bundle.

To understand the patterns used in the app, please take a look at the redux-bundler documentation and the book by Henrik Joreteg. :
 - https://read.reduxbook.com/
 - https://reduxbundler.com/

vercel.json is used if/when hosting the app with Vercel - it simply tells the 'web server' to redirect all URLs to the entry point for the SPA
