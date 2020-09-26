import React, { Component } from "react";
import Dialog from "../../components/Dialog";
import "./dialog.less";

export default class CusDialogpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false,
    };
  }
  handleButton = () => {
    const { showDialog } = this.state;
    this.setState({
      showDialog: !showDialog,
    });
  };
  render() {
    const { showDialog } = this.state;
    return (
      <div>
        <h3>dialogpage</h3>
        <button onClick={this.handleButton}>click</button>
        {showDialog && (
          <Dialog>
            <p>comments</p>
          </Dialog>
        )}
      </div>
    );
  }
}
