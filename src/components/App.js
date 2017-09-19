import React, { Component } from "react";
import Posts from "./Posts";
import Categories from "./Categories";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts();
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
    fetchPosts: () => dispatch(fetchPosts())
  };
}

export default connect(null, mapDispatchToProps)(App);