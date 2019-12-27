import React, { Component } from "react";
import { connect } from "react-redux";

import { getUsers, addUser, updateUser } from "../_actions/users";

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
    this.props.getUsers();
  }

  handleChange = (type, value) => {
    if (type === "fullname") this.setState({ fullname: value });
    else if (type === "username") this.setState({ username: value });
    else this.setState({ index: value });
  };

  handleAddUser = () => {
    const user = {
      name: this.state.fullname,
      username: this.state.username
    };
    this.props.addUser(user);
  };

  handleUpdateUser = () => {
    const user = {
      name: this.state.fullname
    };
    this.props.updateUser(user, this.state.index);
  };

  render() {
    const { data, isLoading, isPost, error } = this.props.users;
    // const { number } = this.props.counter;

    if (isLoading && !isPost) {
      return (
        <div>
          <h1>Loading, please wait!</h1>
        </div>
      );
    }

    if (error) {
      return (
        <div>
          <h1>There's an unknown error occured</h1>
        </div>
      );
    }

    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
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
        <button onClick={this.handleAddUser} style={{ width: 200 }}>
          Add User
        </button>
        <button onClick={this.handleUpdateUser} style={{ width: 200 }}>
          Update User
        </button>
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

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers()),
    addUser: user => dispatch(addUser(user)),
    updateUser: (user, index) => dispatch(updateUser(user, index))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
