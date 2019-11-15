import React, { Component } from "react";
import withToolTip from "./hoc/withToolTip";

class ToolTip extends Component {
  render() {
    return (
      <div>
        coucou
        {this.props.hover}
      </div>
    );
  }
}

export default withToolTip(ToolTip, "hello");
