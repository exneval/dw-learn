import React, { Component } from "react";

class NewApp extends Component {
  render() {
    return (
      <div
        style={{
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <h1>This is new App</h1>
        <button>Button REDUX</button>
      </div>
    );
  }
}

export default NewApp;
