import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class LoginPage extends Component {
  render() {
    const { isLogin } = this.props;
    const { redirect = "/" } = this.props.location.state || {};
    if (isLogin) {
      return <Redirect to={redirect}></Redirect>;
    } else {
      return (
        <div>
          <h3>LoginPage</h3>
        </div>
      );
    }
  }
}
