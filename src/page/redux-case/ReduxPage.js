import React, { Component } from "react";
import store from "../../redux";

export default class ReduxPage extends Component {
  add = () => {
    store.dispatch({ type: "ADD" });
  };

  minus = () => {
    store.dispatch({ type: "MINUS" });
  };

  async = () => {
    store.dispatch((dispatch) => {
      setTimeout(() => {
        dispatch({ type: "ADD" });
      }, 1000);
    });
  };

  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  render() {
    return (
      <div>
        <h3>ReduxPage</h3>
        <p>{store.getState()}</p>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
        <button onClick={this.async}>async</button>
      </div>
    );
  }
}
