import React, { Component } from "react";
// import Posts from "./Posts";
import Categories from "./Categories";
// import Home from "./Home";
import Posts from "./Posts";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Container>
        <Route exact path="/" render={() => <Posts />} />
        <Route exact path="/categories" render={() => <Categories />} />
      </Container>
    );
  }
}

export default App;
