import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

export default connect(({ user }) => ({ isLogin: user.isLogin }), {
  handleLogin: () => ({ type: "LOGIN_SUCCESS" }),
})(
  class LoginPage extends Component {
    handleLogin = () => {};
    render() {
      const { isLogin, handleLogin } = this.props;
      console.log(this.props);
      const { redirect = "/" } = this.props.location.state || {};
      if (isLogin) {
        return <Redirect to={redirect}></Redirect>;
      } else {
        return (
          <div>
            <h3>LoginPage</h3>
            <button onClick={handleLogin}>login</button>
          </div>
        );
      }
    }
  }
);
