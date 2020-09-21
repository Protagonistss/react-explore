import React, { Component } from "react";
import { Form, Input, Button } from "antd";

const nameRules = { required: true, message: "need name" };
const passwordRules = { required: true, message: "need password" };

@Form.create({})
class FormPage extends Component {
  submit = () => {
    const { getFieldsValue, validateFields } = this.props.form;
    validateFields((err, values) => {
      if (err) {
        console.log("err", err);
      } else {
        console.log("success", values);
      }
    });
    console.log("submit behavior", getFieldsValue());
  };
  render() {
    console.log(this.props);
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <h3>formPage</h3>
        <Form>
          <Form.Item>
            {getFieldDecorator("name", { rules: [nameRules] })(
              <Input placeholder="Basic usage"></Input>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", { rules: [passwordRules] })(
              <Input placeholder="Basic password"></Input>
            )}
          </Form.Item>
          <Button type="primary" onClick={this.submit}>
            提交
          </Button>
        </Form>
      </div>
    );
  }
}

export default FormPage;
