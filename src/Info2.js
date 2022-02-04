import React from "react";

class Info2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  render() {
    return (
      <div>
        <h1>From Info2 Component</h1>
      </div>
    );
  }
}

export default Info2;
