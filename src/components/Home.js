import React, { Component } from "react";
import Posts from "./Posts";
import { fetchPosts } from "../actions";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <Posts />;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  };
}

export default connect(null, mapDispatchToProps)(Home);
