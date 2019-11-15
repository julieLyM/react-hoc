import React, { Component } from "react";

function withData(WrappedComponent, callApi) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: []
      };
    }

    async componentDidMount() {
      const { data } = await callApi();
      this.setState({
        data
      });
    }
    render() {
      return (
        <div>
          <WrappedComponent {...this.props} data={this.state.data} />
        </div>
      );
    }
  };
}

export default withData;
