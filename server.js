
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';

import { routes } from './routes';

const app = express();

/**
 * Bug in material ui
 * https://github.com/callemall/material-ui/pull/2172#issuecomment-157404901
 */
app.use(function(req, res, next) {
  global.navigator = {
    userAgent: req.headers['user-agent']
  };
  next();
});

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('*', (req, res) => {
  // routes is our object of React routes defined above
  console.log('server hit for %s', req.url);
  match({routes, location: req.url}, (err, redirectLocation, props) => {
    if (err) {
      // something went badly wrong, so 500 with a message
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      // we matched a ReactRouter redirect, so redirect from the server
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (props) {
      // if we got props, that means we found a valid component to render
      // for the given route
      const markup = renderToString(<RoutingContext {...props} />);
      // render `index.ejs`, but pass in the markup we want it to display
      res.render('index', {markup})

    } else {
      // no route match, so 404. In a real app you might render a custom
      // 404 view here
      res.sendStatus(404);
    }
  });
});

var server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

