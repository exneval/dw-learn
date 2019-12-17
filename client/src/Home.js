import React, { Component } from "react";
import { API } from "./config/api";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    API.get(`/accounts`)
      .then(res => {
        this.setState({ loading: false, data: res.data });
      })
      .catch(err => {});
  }

  render() {
    const { loading, data } = this.state;

    if (loading) {
      return (
        <div>
          <h1>Please wait, Now Loading...</h1>
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
        <h1>{this.props.children}</h1>
        {data.map(entry => {
          return (
            <div key={entry.id}>
              <p>username: {entry.username}</p>
              <p>email: {entry.email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Home;
