import React, { Component } from "react";
// import Posts from "./Posts";
import Categories from "./Categories";
import Home from "./Home";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Container>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/categories" render={() => <Categories />} />
      </Container>
    );
  }
}

export default App;
