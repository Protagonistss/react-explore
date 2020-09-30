import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Router from "./router/BrowserRouter";
import Route from "./router/Route";
import Link from "./router/Link";

import MainPage from "./MainPage";
import UserPage from "./UserPage";
import LoginPage from "./LoginPage";
import AccidentRoute from "./AccidentRoute";

export default class RouterPage extends Component {
  render() {
    return (
      <div>
        <h3>routerPage</h3>
        <Router>
          <Link to="/">index </Link>
          <Link to="/user">user </Link>
          <Link to="/children">children </Link>
          <Link to="/render">render </Link>
          <Link to="/search/123">search </Link>
          {/* <Link to="/login">login </Link>
          <Link to="/search/123">搜索</Link> */}
          {/* <Route exact path="/" component={MainPage}></Route>
          <Route path="/user" component={UserPage}></Route>
          <Route path="/login" component={LoginPage}></Route> */}
          {/* <Switch> */}
          <Route exact path="/" component={MainPage}></Route>
          <Route path="/user" component={UserPage}></Route>
          <Route path="/chilren" children={() => <div>children</div>}></Route>
          <Route path="/render" render={() => <div>render</div>}></Route>
          <Route path="/search/:id" component={SearchComponent}></Route>
          {/* <AccidentRoute path="/user" component={UserPage}></AccidentRoute> */}
          {/* <Route path="/login" component={LoginPage}></Route> */}
          {/* <Route path="/search/:id" component={SearchComponent}></Route> */}
          {/* <Route render={() => <div>404</div>}></Route> */}
          {/* </Switch> */}
        </Router>
      </div>
    );
  }
}

function Info(props) {
  return <div>详情:----</div>;
}

function SearchComponent(props) {
  console.log("props", props);
  const { id } = props.match.params;
  return (
    <div>
      content-{id}
      <Link to={"/search/" + id + "/info"}>详情</Link>
      <Route path={"/search/:" + id + "/info"} component={Info}></Route>
    </div>
  );
}
