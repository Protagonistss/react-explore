import React, { Component } from "react";
// import { Redirect, Route } from "react-router-dom";
import Route from "./router/Route";
import Redirect from "./router/Redirect";
import { connect } from "react-redux";

export default connect(({ user }) => ({ isLogin: user.isLogin }))(
  class AccidentRoute extends Component {
    render() {
      const { isLogin, path, component } = this.props;
      if (isLogin) {
        return <Route path={path} component={component}></Route>;
      } else {
        return (
          <Redirect
            to={{ pathname: "/login", state: { redirect: path } }}
          ></Redirect>
        );
      }
    }
  }
);
