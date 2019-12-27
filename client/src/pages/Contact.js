import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategories } from "../_actions/categories";

class Contact extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const { data, isLoading, error } = this.props.categories;

    if (error) {
      return (
        <div>
          <h1>Error.</h1>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div>
          <h1>Now loading to Abdi API</h1>
        </div>
      );
    }

    return (
      <div>
        {data.map((entry, index) => {
          return <p key={index}>{entry.name}</p>;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => {
      dispatch(getCategories());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
