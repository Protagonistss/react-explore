import React, { Component } from "react";
import ContextTypePage from "./ContextTypePage";
import { ThemeProvider } from "./ThemeContext";

export default class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: { themeColor: "red" },
    };
  }
  render() {
    const { theme } = this.state;
    return (
      <div>
        <p>ContextPage</p>
        <ThemeProvider value={theme}>
          <ContextTypePage></ContextTypePage>
        </ThemeProvider>
      </div>
    );
  }
}
