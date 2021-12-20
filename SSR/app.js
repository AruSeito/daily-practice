import React from "react";
import { createRoute } from "./router/index"
export default class App extends React.PureComponent {
  render() {
    return createRoute("client")();
  }
}