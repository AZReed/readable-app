import React, { Component } from "react";
import Posts from "./Posts";
import { fetchPosts } from "../actions";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <h3>Readable App Home</h3>
        <Posts />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  };
}

export default connect(null, mapDispatchToProps)(Home);
