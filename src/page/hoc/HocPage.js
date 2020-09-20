import React, { Component } from "react";
import "./HocPage.less";
// hoc is function

// function Child(props) {
//   return <div>child</div>;
// }

const foo = (Cmp) => (props) => {
  return (
    <div className="border">
      <Cmp {...props}></Cmp>
    </div>
  );
};

// const Foo = foo(Child);

@foo
class Child extends Component {
  render() {
    return <div>Child</div>;
  }
}

export default class HocPage extends Component {
  render() {
    return (
      <div>
        {/* <Foo></Foo> */}
        <Child></Child>
      </div>
    );
  }
}
