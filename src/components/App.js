import React, { Component } from "react";
import Posts from "./Posts";
import Categories from "./Categories";
import { connect } from 'react-redux'
import { selectPosts } from "../actions";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import * as ReadableAPI from "../utils/ReadableAPI";

class App extends Component {

  state = {
    posts: null
  }

  componentDidMount() {
    ReadableAPI.getAllPosts().then(posts => {
      this.props.allPosts(posts)
    });

  }

  render() {
    return (
      <Container>
        <Route exact path="/" render={() => <Posts />} />
        <Route exact path="/categories" render={() => <Categories />} />
      </Container>
    );
  }
}

/* strictType */

function mapStateToProps({ posts }) {
  return {
    posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    allPosts: data => dispatch(selectPosts(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);