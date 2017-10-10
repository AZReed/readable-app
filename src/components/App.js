import React from "react";
import Posts from "./Posts";
import Categories from "./Categories";
import { Route } from "react-router-dom";

const App = () => {
    return (
      <section className="section">
        <div className="container">
          <Route
            exact
            path="/"
            render={() => (
              <div className="columns">
                <div className="column is-3">
                  <Categories />
                </div>
                <div className="column is-9">
                  <Posts />
                </div>
              </div>
            )}
          />
          <Route exact path="/post" render={() => (
            <p>foobar</p>
          )}/>
        </div>
      </section>
    );
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
