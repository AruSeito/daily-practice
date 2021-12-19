const React = require("react");
const { renderToString } = require("react-dom/server");

const express = require("express");

const app = express();
const PORT = 3000;

const App = class extends React.PureComponent {
  render() {
    return React.createElement("h1", null, "Hello,SSR");
  }
}

app.get("/", function (req, res) {
  const content = renderToString(React.createElement(App));
  res.send(content);
})


app.listen(PORT, () => {
  console.log(`server is listen ${PORT}`)
})