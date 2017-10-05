import React, { Component } from "react";
import Posts from "./Posts";
import Categories from "./Categories";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <section className="section">
        <Route exact path="/" render={() => <Posts />} />
        <Route exact path="/categories" render={() => <Categories />} />
      </section>
    );
  }
}

export default App;
