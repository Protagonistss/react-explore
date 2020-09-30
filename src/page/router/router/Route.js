import React, { Component } from "react";
import { RouterContext } from "./RouterContext";
import matchPath from "./matchPath";

export default class Route extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {(ctx) => {
          const {
            path,
            children,
            component,
            render,
            computedMatch,
          } = this.props;
          const location = this.props.location || ctx.location;
          const match = computedMatch
            ? computedMatch
            : path
            ? matchPath(location.pathname, this.props)
            : ctx.match;
          const props = {
            ...ctx,
            location,
            match,
          };
          // matched need deal children component render
          return (
            <RouterContext.Provider value={props}>
              {match
                ? children
                  ? typeof children === "function"
                    ? children(props)
                    : children
                  : component
                  ? React.createElement(component, props)
                  : render
                  ? render()
                  : null
                : typeof children === "function"
                ? children(props)
                : null}
            </RouterContext.Provider>
          );
        }}
      </RouterContext.Consumer>
    );
  }
}
