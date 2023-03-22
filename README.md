# React-redux SPA

Configured with:
- Webpack
- ESLint
- Redux-bundler
- Money-clip (local caching)
- Internal-nav-helper (routing)

It also has Prettier installed, but removed usage (in lint config)

- // sinks (updating immutable state objects and arrays)
- // redux-persist-middleware
- // milliseconds
- // query-string
- // feather-route-matcher
- // todo jest
- // todo testing-library
- // todo cypress

## Notes

Open dev tools to see output of debug bundle.

SWAPI used to demonstrate how to 

data fetching is triggered by the apps's current state (rather than by which component is currently being displayed) - data will be refreshed if it's older than one minute.

The app will not fetch unless its data is stale, or it needs to retry to do a failed attempt to fetch





Things to try
Leave this page open, and watch the log output in the console. The data will be refreshed if its older than one minute.
While you have the page loaded, use devtools to force the app to go offline. It will keep showing the data it has, but will now retry more actively. These fetches will fail, but it will still show the data it has. Now, make it go online again, and you should see the data getting refreshed rather quickly.
The APP_IDLE actions will only be dispatched when the tab is in focus. Test this out by opening the network tab in devtools and clearing it, now switching away to a different tab for a while. When you switch back you'll notice no fetches occured while you were away, but as soon as you switch back to this tab a fetch is immediately triggered.
Whenever there has been a successful fetch, the data is persisted to indexedDB via the localCaching bundle (including metadata about the fetch). So if you refresh and it successfully fetched data recently enough, no fetch is triggered at all.