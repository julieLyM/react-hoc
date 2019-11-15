import React, { Component } from "react";

function withErrorManagment(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    componentDidCatch(error, errorInfo) {
      this.setState({
        hasError: true
      });
      console.log(error);
      console.log(errorInfo);
    }

    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
      return <WrappedComponent {...this.props} />;
    }
  };
}
export default withErrorManagment;
