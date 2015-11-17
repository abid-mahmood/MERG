'use strict';
require("babel-core");
require("./server.js");

import express from "express";
import schema from './schema';
import { graphql } from 'graphql';
import bodyParser from 'body-parser';

let app = express();
let PORT = 3000;

app.use(bodyParser.text({ type: 'application/graphql' }));

app.post('/graphql', (req, res) => {
  graphql(schema, req.body).then((result) => {
    res.send(JSON.stringify(result, null, 2));
  });
});

const server = app.listen(PORT, () => {
  let host = server.address().address;
  let port = server.address().port;

  console.log("GraphQL server is listening on %s:%s", host, port);
})