import React, { Component } from "react";
import store from "./reducer";
import FormCreate from "../../../components/FormCreate";

const inputRules = { require: true, message: "enter your calculate value" };

@FormCreate
class CalculatePage extends Component {
  constructor(props) {
    super(props);
  }
  validate = () => {};
  add = () => {
    const { getFieldValue, validateField } = this.props;
    // validateField((errors, value) => {
    //   if (errors) {
    //     console.log("1111", errors);
    //     store.dispatch({ type: "ADD", input: getFieldValue("input") - 0 });
    //   } else {
    //     console.log("aaaaa", errors);
    //   }
    // });
    store.dispatch({ type: "ADD", input: getFieldValue("input") - 0 });
    this.validate(() => {});
  };
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }
  render() {
    const { getFieldDecorator } = this.props;
    return (
      <div>
        <h3>CalCulatePage</h3>
        {getFieldDecorator("input", { rules: [inputRules] })(<input></input>)}

        <p>result:{store.getState()}</p>

        <button onClick={this.add}>add</button>
      </div>
    );
  }
}

export default CalculatePage;
