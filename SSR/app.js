import React from "react";

export default class App extends React.PureComponent {
  handleClick(){
    alert("点击了")
  }
  render() {
    return <h1 onClick={this.handleClick}>Hello,ssr</h1>
  }
}