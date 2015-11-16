'use strict';
require("babel-core");
require("./server.js");

import express from "express";

let app = express();
let PORT = 3000;

app.post('/graphql', (req, res) => {
  res.send("Hello");
  console.log("Server started");
})

const server = app.listen(PORT, () => {
  let host = server.address().address;
  let port = server.address().port;

  console.log("GraphQL server is listening on %s:%s", host, port);
})