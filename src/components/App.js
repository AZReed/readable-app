import React, { Component } from "react";
import Posts from "./Posts";
import Categories from "./Categories";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <Route
            exact
            path="/"
            render={() => (
              <div className="columns">
                <div className="column">
                  <Categories />
                </div>
                <div className="column">
                  <Posts />
                </div>
              </div>
            )}
          />
        </div>
      </section>
    );
  }
}

{
  /*
  <section className="section">
    <Route exact path="/" render={() => <Posts />} />
    <Route exact path="/categories" render={() => <Categories />} />
  </section>
*/
}

export default App;
