import React, { Component } from "react";

export default function FormCreate(Cmp) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.options = {};
    }

    handleChange = (e) => {
      let { value, name } = e.target;
      this.setState({ [name]: value });
    };

    getFieldsValue = () => {
      return { ...this.state };
    };

    getFieldValue = (field) => {
      return this.state[field];
    };

    getFieldDecorator = (field, options) => (InputCmp) => {
      this.options[field] = options;
      return React.cloneElement(InputCmp, {
        name: field,
        value: this.state[field] || "",
        onChange: this.handleChange,
      });
    };

    validateField = (fn) => {
      // need validate value and collection
      const errors = {};
      const state = { ...this.state };
      for (let name in this.options) {
        if (this.state[name] === undefined) {
          errors[name] = `${name} is required`;
        }
      }
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
