import React, { Component } from "react";
import { Form, Input, Button } from "antd";

export default class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
    };
  }
  submit = () => {
    console.log("submit behavior", this.state);
  };
  render() {
    const { name, password } = this.state;
    return (
      <div>
        <h3>formPage</h3>
        <Form>
          <Form.Item>
            <Input
              placeholder="Basic usage"
              value={name}
              onChange={(e) =>
                this.setState({
                  name: e.target.value,
                })
              }
            ></Input>
          </Form.Item>
          <Form.Item>
            <Input
              placeholder="Basic password"
              value={password}
              onChange={(e) =>
                this.setState({
                  password: e.target.value,
                })
              }
            ></Input>
          </Form.Item>
          <Button type="primary" onClick={this.submit}>
            提交
          </Button>
        </Form>
      </div>
    );
  }
}
