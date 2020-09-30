import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "./utils/router";
import HomePage from "./HomePage";
import UserPage from "./UserPage";

export default class EntryPage extends Component {
  render() {
    return (
      <div>
        <h3>EntryPage</h3>
        <Router>
          <Link to="/">首页</Link>
          <Link to="/user">用户中心</Link>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/user" component={UserPage}></Route>
        </Router>
      </div>
    );
  }
}
