import React, { Component } from "react";
import Posts from "./Posts";
import Categories from "./Categories";
import { connect } from "react-redux";
import { setPosts } from "../actions";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import * as ReadableAPI from "../utils/ReadableAPI";

class App extends Component {
  componentDidMount() {
    ReadableAPI.getAllPosts().then(posts => {
      posts.forEach(post => {
        ReadableAPI.getComments(post.id).then(comments => {
          post.comments = comments;
        });
      });
      console.log("posts with comments", posts);
      this.props.setPosts( posts );
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

function mapDispatchToProps(dispatch) {
  return {
    setPosts: data => dispatch(setPosts(data))
  };
}

export default connect(null, mapDispatchToProps)(App);