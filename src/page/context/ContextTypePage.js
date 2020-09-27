import { Spin } from "antd";
import React, { Component } from "react";
import { ThemeContext } from "./ThemeContext";

export default class ContextTypePage extends Component {
  // 这种 就只能搞一个context啊，这不是搞事吗，鸡肋
  static contextType = ThemeContext;
  constructor(props) {
    super(props);

    console.log("this", this);
  }
  render() {
    const { themeColor } = this.context;

    return <div>ContextTypePage----{themeColor}</div>;
  }
}
