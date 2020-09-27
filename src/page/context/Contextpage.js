import React, { Component } from "react";
import ContextTypePage from "./ContextTypePage";
import { ThemeProvider } from "./ThemeContext";
import ConsumerPage from "./ConsumerPage";

export default class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: { themeColor: "red" },
    };
  }
  handleChange = () => {
    const { themeColor } = this.state.theme;
    this.setState({
      theme: {
        themeColor: themeColor === "red" ? "green" : "red",
      },
    });
  };
  render() {
    const { theme } = this.state;
    return (
      <div>
        <button onClick={this.handleChange}>change</button>
        <p>ContextPage</p>
        <ThemeProvider value={theme}>
          <ContextTypePage></ContextTypePage>
          <ConsumerPage></ConsumerPage>
        </ThemeProvider>
      </div>
    );
  }
}
