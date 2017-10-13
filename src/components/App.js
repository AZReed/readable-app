import React from "react";
import Posts from "./Posts";
import Categories from "./Categories";
//import postForm from "./postForm";
import addPostForm from "./addPostForm";
import editPostForm from "./editPostForm";
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
      <Route name="editPost" exact path="/editPost/:id" component={editPostForm} />
      <Route name="addPost" exact path="/addPost" component={addPostForm} />
    </section>
  );
};

export default App;
