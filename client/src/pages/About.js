import React, { Component } from "react";
import { connect } from "react-redux";

import { getUsers, getUsersPending } from "../_actions/users";
import axios from "axios";

class About extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersPending()); //Fire ACT Pending
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      this.props.dispatch(getUsers(res.data)); //Fire ACT FULLFILED
    });
  }

  render() {
    const { data, isLoading } = this.props.users;
    // const { number } = this.props.counter;

    if (isLoading) {
      return (
        <div>
          <h1>Loading, please wait!</h1>
        </div>
      );
    }

    return (
      <div>
        {/* <h1>{number}</h1> */}
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

export default connect(mapStateToProps)(About);
