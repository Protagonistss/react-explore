import React, { Component } from "react";
import matchPath from "./matchPath";
import { RouterContext } from "./RouterContext";

export default class Switch extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {(ctx) => {
          const location = this.props.location || ctx.location;
          let needRenderNode,
            match = null;
          const { children } = this.props;

          React.Children.forEach(children, (child) => {
            if (match === null && React.isValidElement(child)) {
              needRenderNode = child;
              const path = child.props.path;
              match = path
                ? matchPath(location.pathname, { ...child.props, path })
                : ctx.match;
            }
          });
          return match
            ? React.cloneElement(needRenderNode, { location })
            : null;
        }}
      </RouterContext.Consumer>
    );
  }
}
