import React, { Component } from "react";
import { connect } from "react-redux";

import {
  getUsers,
  getUsersPending,
  addUser,
  addUserPending,
  updateUser,
  updateUserPending
} from "../_actions/users";
import axios from "axios";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      username: "",
      index: null
    };
  }

  componentDidMount() {
    this.props.dispatch(getUsersPending()); //Fire ACT Pending
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      this.props.dispatch(getUsers(res.data)); //Fire ACT FULLFILED
    });
  }

  handleChange = (type, value) => {
    if (type === "fullname") this.setState({ fullname: value });
    else if (type === "username") this.setState({ username: value });
    else this.setState({ index: value });
  };

  handleAddUser = () => {
    this.props.dispatch(addUserPending()); //Fire ACT Pending
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name: this.state.fullname,
        username: this.state.username
      })
      .then(res => {
        this.props.dispatch(addUser(res.data)); //Fire ACT FULLFILED
      });
  };

  handleUpdateUser = () => {
    this.props.dispatch(updateUserPending()); //Fire ACT Pending
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${this.state.index}`, {
        name: this.state.fullname
      })
      .then(res => {
        this.props.dispatch(updateUser(res.data, this.state.index)); //Fire ACT FULLFILED
      });
  };

  render() {
    const { data, isLoading, isPost } = this.props.users;
    // const { number } = this.props.counter;

    if (isLoading && !isPost) {
      return (
        <div>
          <h1>Loading, please wait!</h1>
        </div>
      );
    }

    return (
      <div>
        <label>
          Fullname:{" "}
          <input
            name="fullname"
            onChange={evt => this.handleChange("fullname", evt.target.value)}
          />
        </label>
        <label>
          Username:{" "}
          <input
            name="username"
            onChange={evt => this.handleChange("username", evt.target.value)}
          />
        </label>
        <label>
          ID:{" "}
          <input
            name="index"
            onChange={evt => this.handleChange("index", evt.target.value)}
          />
        </label>
        <button onClick={this.handleAddUser}>Add User</button>
        <button onClick={this.handleUpdateUser}>Update User</button>
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
