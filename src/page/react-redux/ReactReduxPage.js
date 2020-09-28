import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

export default connect(
  //mapStateToProps
  //ownProps 有点意思啊 这个玩意有毒
  (state, ownProps) => {
    console.log("ownProps", ownProps);
    return {
      count: state,
    };
  },
  // mapDispathToProps object/function
  //   {
  //     add: () => ({
  //       type: "ADD",
  //     }),
  //   }

  (dispatch) => {
    let res = {
      add: () => ({ type: "ADD" }),
    };
    res = bindActionCreators(res, dispatch);
    return { dispatch, ...res };
  },
  // mergeProps
  (stateProps, dispatchProps, ownProps) => {
    return {
      ...stateProps,
      ...dispatchProps,
      ...ownProps,
      test: "test",
    };
  }
)(
  class ReactReduxPage extends Component {
    render() {
      const { count, dispatch, add } = this.props;
      console.log("tag", this.props);
      return (
        <div>
          <h3>reactreduxPage</h3>
          <p>{count}</p>
          <button onClick={() => dispatch({ type: "ADD" })}>add</button>
          <button onClick={add}>mapDispathch</button>
        </div>
      );
    }
  }
);
