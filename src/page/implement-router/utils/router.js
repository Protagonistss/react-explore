import React, { Component } from "react";
import { createBrowserHistory } from "history";

const RouterContext = React.createContext();
const RouterProvider = RouterContext.Provider;

export class BrowserRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.history = createBrowserHistory();
    this.history.listen((location) => {
      console.log("lcoation", location);
    });
  }
  render() {
    return (
      <RouterProvider
        children={this.props.children}
        value={{ history: this.history }}
      ></RouterProvider>
    );
  }
}

export class Route extends Component {
  render() {
    const { path, component } = this.props;
    console.log("aaaa", path);
    const match = path === window.location.pathname;
    return match ? React.createElement(component, this.props) : null;
  }
}

export class Link extends Component {
  static contextType = RouterContext;
  handleClick = (e) => {
    e.preventDefault();
    const { history } = this.context;
    history.push(this.props.to);
  };
  render() {
    return (
      <a href={this.props.to} onClick={this.handleClick}>
        {this.props.children}
      </a>
    );
  }
}
