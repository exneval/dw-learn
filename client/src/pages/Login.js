import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      rememberMe: false
    };
  }

  componentDidMount() {
    const rememberMe = localStorage.getItem("rememberMe") === "true";
    const user = rememberMe ? localStorage.getItem("user") : "";
    this.setState({ user, rememberMe });
  }

  handleChange = event => {
    const input = event.target;
    const value = input.type === "checkbox" ? input.checked : input.value;

    this.setState({ [input.name]: value });
  };

  handleFormSubmit = () => {
    const { user, rememberMe } = this.state;
    localStorage.setItem("rememberMe", rememberMe);
    localStorage.setItem("user", user);
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label style={{ fontSize: 20, fontWeight: "bold" }}>
          User:{" "}
          <input
            name="user"
            value={this.state.user}
            onChange={this.handleChange}
          />
        </label>
        <label style={{ fontSize: 20, fontWeight: "bold" }}>
          <input
            name="rememberMe"
            checked={this.state.rememberMe}
            onChange={this.handleChange}
            type="checkbox"
          />{" "}
          Remember me
        </label>
        <button type="submit">Sign In</button>
      </form>
    );
  }
}

export default Login;
