import React, { Component } from "react";
import { RouterContext } from "./RouterContext";

export default class Link extends Component {
  handleClick = (e, history) => {
    console.log(history);
    e.preventDefault();
    history.push(this.props.to);
  };
  render() {
    const { children, to } = this.props;
    return (
      <RouterContext.Consumer>
        {(ctx) => (
          <a
            href={to}
            onClick={(event) => this.handleClick(event, ctx.history)}
          >
            {children}
          </a>
        )}
      </RouterContext.Consumer>
    );
  }
}
