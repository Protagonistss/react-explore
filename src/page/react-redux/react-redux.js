import React, { Component } from "react";
// import { bindActionCreators } from "redux";

const ValueContext = React.createContext();
const ValueProvider = ValueContext.Provider;

export const connect = (
  mapStateToProps = (state) => state,
  mapDispatchToProps
) => (WrapperComponent) => {
  return class extends Component {
    static contextType = ValueContext;
    constructor(props) {
      super(props);
      this.state = {
        props: {},
      };
    }
    componentDidMount() {
      const { subscribe } = this.context;
      this.update();
      subscribe(() => {
        this.update();
      });
    }

    update = () => {
      const { dispatch, getState } = this.context;
      let stateProps = mapStateToProps(getState());
      let dispatchProps;
      // mapDispatchToProps plain or function
      if (typeof mapDispatchToProps === "object") {
        dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
      } else if (typeof mapDispatchToProps === "function") {
        dispatchProps = mapDispatchToProps(dispatch);
      } else {
        dispatchProps = { dispatch };
      }

      this.setState({
        props: {
          ...stateProps,
          ...dispatchProps,
        },
      });
    };

    render() {
      return <WrapperComponent {...this.state.props}></WrapperComponent>;
    }
  };
};

export class Provider extends Component {
  render() {
    return (
      <ValueProvider value={this.props.store}>
        {this.props.children}
      </ValueProvider>
    );
  }
}

function bindActionCreator(creator, dispatch) {
  return (...args) => dispatch(creator(...args));
}

/**
 *
 * @param {*} creators {add:()=>({type:"ADD"})
 * @param {*} dispatch function
 */
function bindActionCreators(creators, dispatch) {
  const obj = {};
  for (const key in creators) {
    obj[key] = bindActionCreator(creators[key], dispatch);
  }
  return obj;
}
