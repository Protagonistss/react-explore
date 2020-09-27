import React, { Component } from "react";

export default function FormCreate(Cmp) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { errors: {} };
      this.options = {};
    }

    handleChange = (e) => {
      let { value, name } = e.target;
      this.setState({ [name]: value }, () => {
        this.validate();
      });
    };

    getFieldsValue = () => {
      return { ...this.state };
    };

    getFieldValue = (field) => {
      return this.state[field];
    };

    getFieldDecorator = (field, options) => (InputCmp) => {
      this.options[field] = options;
      return (
        <div>
          {React.cloneElement(InputCmp, {
            name: field,
            value: this.state[field] || "",
            onChange: this.handleChange,
          })}
          <p className="error">{this.state.errors[field]}</p>
        </div>
      );
    };

    validate = () => {
      const errors = {};
      for (let name in this.options) {
        if (this.state[name] === undefined) {
          errors[name] = this.options[name].rules[0].message;
        }
      }
      this.setState({ errors });
    };

    validateField = (fn) => {
      // need validate value and collection
      this.validate();
      const state = { ...this.state };
      const { errors } = this.state;
      if (JSON.stringify(errors)) {
        fn(errors, state);
      } else {
        fn(undefined, state);
      }
    };

    render() {
      return (
        <div className="border">
          <Cmp
            getFieldDecorator={this.getFieldDecorator}
            getFieldsValue={this.getFieldsValue}
            getFieldValue={this.getFieldValue}
            validateField={this.validateField}
          ></Cmp>
        </div>
      );
    }
  };
}
