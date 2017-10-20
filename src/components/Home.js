import React, { Component } from "react";
import Posts from "./Posts";
import Categories from "./Categories";
//import { fetchPosts } from "../actions";
//import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    //this.props.fetchPosts();
    //console.log(this.props)
  }

  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="column is-3">
            <Categories/>
          </div>
          <div className="column is-9">
            <Posts/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
