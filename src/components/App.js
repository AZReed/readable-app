import React from "react";
import Posts from "./Posts";
import Categories from "./Categories";
import addPostForm from "./addPostForm";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <section className="section">
      <Route
        exact
        path="/"
        render={() => (
          <div className="container">
            <div className="columns">
              <div className="column is-3">
                <Categories />
              </div>
              <div className="column is-9">
                <Posts />
              </div>
            </div>
          </div>
        )}
      />
      <Route exact path="/post" component={addPostForm} />
    </section>
  );
};

export default App;
