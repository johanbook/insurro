# Insurro

Insurro simple chat application based on [socket.io](socket.io). It is
based on the concept that the server should not story any data and as
much computation as possible is done client-side.

See the app in action [here](https://insurro.herokuapp.com/).

## Running it

The app can be run in any Node.js environment by doing

```sh
PORT=8080 npm run build && npm run serve
```

## Development

The app uses React and Redux, where socket.io events are dispatched as
Redux actions.

Components are build in isolation using [Storybook](https://storybook.js.org/).
Start the storybook server by running

```sh
npm run storybook
```
