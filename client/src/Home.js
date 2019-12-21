import React, { Component } from "react";
import { connect } from "react-redux";
import { actionINC, actionDEC } from "./_actions/counter";

class Home extends Component {
  handlePress = action => {
    const { number } = this.props.counter;

    if (action === "INC") this.props.dispatch(actionINC(number));
    else this.props.dispatch(actionDEC(number));
  };

  render() {
    // const { number } = this.props.counter;
    const { data, isLoading } = this.props.users;

    if (isLoading) {
      return (
        <div>
          <h1>Loading, please wait!</h1>
        </div>
      );
    }

    return (
      <div
        style={{
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {/* <h1>{number}</h1>
        <button onClick={() => this.handlePress("INC")}>BUTTON INC</button>
        <button onClick={() => this.handlePress("DEC")}>BUTTON DEC</button> */}
        {data.map((entry, index) => {
          return <p key={index}>{entry.name}</p>;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    users: state.users
  };
};

export default connect(mapStateToProps)(Home);
