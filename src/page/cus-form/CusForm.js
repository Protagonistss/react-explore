import React, { Component } from "react";
import FormCreate from "../../components/FormCreate";
import "./CusForm.less";

const nameRules = { required: true, message: "enter your name" };
const passwordRules = { required: true, message: "enter your password" };

@FormCreate
class CusFormPage extends Component {
  submit = () => {
    const { getFieldsValue, getFieldValue, validateField } = this.props;

    validateField((error, values) => {
      if (error) {
        console.log("error", error);
      } else {
        console.log("success", values);
      }
    });
    console.log("submit behavior", getFieldsValue());
    console.log("password", getFieldValue("password"));
  };
  render() {
    console.log("props", this.props);
    const { getFieldDecorator } = this.props;
    return (
      <div>
        <h3>CusFormPage</h3>
        {getFieldDecorator("name", { rules: [nameRules] })(
          <input placeholder="u name"></input>
        )}

        {getFieldDecorator("password", { rules: [passwordRules] })(
          <input placeholder="u password"></input>
        )}
        <button onClick={this.submit}>submit</button>
      </div>
    );
  }
}

export default CusFormPage;
