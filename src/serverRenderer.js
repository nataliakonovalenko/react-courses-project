import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from 'react-router-dom';
import App from "./App";
import configureStore from "./store/store";
import api from "./api/api";
import {ChunkExtractor} from "@loadable/server";
const path = require("path");

function renderHTML(html, preloadedState, extractor) {
    return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
          ${process.env.NODE_ENV === 'development' ? '' : extractor.getStyleTags()}
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          ${extractor.getScriptTags()}
        </body>
      </html>
  `;
}

const statsFile = path.resolve(
    __dirname,
    '../client/loadable-stats.json',
);

export default function serverRenderer() {
    return async (req, res, next) => {

        if (req.url.indexOf('.') !== -1) {
             next();

            return;
        }

        let initialState = {};

        if(req.url.includes('/search')){
            const searchQuery = req.url.split('/search/')[1];

            const initialData = await api.searchMovies(searchQuery, "title")
                .then((response) => {
                    return response.data;
                });

            initialState = {movie: {moviesList: initialData}}
        }

        const store = configureStore(initialState);

        // This context object contains the results of the render
        const context = {};

        const extractor = new ChunkExtractor({ statsFile });

        const renderRoot = () => (
            <App
                context={context}
                location={req.url}
                Router={StaticRouter}
                store={store}
            />
        );

        const jsx = extractor.collectChunks(renderRoot);

        renderToString(jsx);

        // context.url will contain the URL to redirect to if a <Redirect> was used
        if (context.url) {
            res.writeHead(302, {
                Location: context.url,
            });
            res.end();
            return;
        }

        const htmlString = renderToString(jsx);
        const preloadedState = store.getState();

        res.send(renderHTML(htmlString, preloadedState, extractor));
    };
}
