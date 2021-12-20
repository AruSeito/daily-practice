import React from "react";
import { renderToString } from "react-dom/server"
import { createRoute } from "./router";

const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.static("dist"));

app.get("*", function (req, res) {
  const content = renderToString(createRoute("server")({location:req.url}))
  res.send(`
  <!DOCTYPE html>
    <html lang="en">
      <head>
      <meta charset="UTF-8">
    <title>ssr</title>
    </head>
    <body>
      <div id="root">${content}</div>
    <script src="/client/index.js"></script>
    </body>
  </html>`)
})

// app.get("/", function (req, res) {
//   const content = renderToString(<App />);
//   console.log(content);
//   res.send(`
//   <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <title>ssr</title>
// </head>
// <body>
//   <div id="root">${content}</div>
//   <script src="/client/index.js"></script>
// </body>
// </html>`);
// })


app.listen(PORT, () => {
  console.log(`server is listen ${PORT}`)
})