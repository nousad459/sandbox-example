import React from "react";

class Info1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  render() {
    if (this.props.info === "Apple") {
      // Simulate a JS error
      throw new Error("Crashed!!!!");
    }
    return (
      <div>
        <h1>From Info1 Component</h1>
      </div>
    );
  }
}

export default Info1;
