import React, { Component } from "react";

function withToolTip(Wrapped, msg) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hover: false
      };
    }

    clicHover() {
      this.setState({
        hover: true
      });
    }

    render() {
      return (
        <div onMouseOver={this.clicHover.bind(this)}>
          <Wrapped {...this.props} hover={this.state.hover} />
          {this.state.hover && <div>{msg}</div>}
        </div>
      );
    }
  };
}

export default withToolTip;
