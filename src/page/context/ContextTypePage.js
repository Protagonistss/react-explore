import { Spin } from "antd";
import React, { Component } from "react";
import { ThemeContext } from "./ThemeContext";

export default class ContextTypePage extends Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    console.log("this", this);
  }
  render() {
    return <div>ContextTypePage</div>;
  }
}
