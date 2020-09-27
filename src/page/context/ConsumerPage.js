import React from "react";
import { ThemeConsumer } from "./ThemeContext";

export default function ConsumerPage(props) {
  return (
    <div>
      <h3>ConsumerPage</h3>
      <ThemeConsumer>{(ctx) => <div>{ctx.themeColor}</div>}</ThemeConsumer>
    </div>
  );
}
