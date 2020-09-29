import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function ListItemLink({ to, name, ...rest }) {
  return (
    <Route
      path={to}
      children={({ match }) => (
        <li className={match ? "active" : ""}>
          <Link to={to} {...rest}>
            {name}
          </Link>
        </li>
      )}
    ></Route>
  );
}

export default class ChildrenPage extends Component {
  render() {
    return (
      <div>
        <h3>ChildrenPage</h3>
        <Router>
          <ul>
            <ListItemLink to="/somewhere" name="链接1"></ListItemLink>
            <ListItemLink to="/somewhere-else" name="链接2"></ListItemLink>
          </ul>
        </Router>
      </div>
    );
  }
}
