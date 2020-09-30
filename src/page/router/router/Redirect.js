import React, { Component } from "react";
import { RouterContext } from "./RouterContext";

export default class Redirect extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {(ctx) => {
          const { history } = ctx;
          const { to } = this.props;
          return <LifeCycle onMount={() => history.push(to)}></LifeCycle>;
        }}
      </RouterContext.Consumer>
    );
  }
}

class LifeCycle extends Component {
  componentDidMount() {
    if (this.props.onMount) {
      this.props.onMount();
    }
  }
  render() {
    return null;
  }
}
