import React from "react";
//import Posts from "./Posts";
//import Categories from "./Categories";
//import postForm from "./postForm";
import addPostForm from "./addPostForm";
import editPostForm from "./editPostForm";
import Home from "./Home";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <section className="section">
      <Route exact path="/" component={Home} />
      <Route exact path="/editPost/:id" component={editPostForm} />
      <Route exact path="/addPost" component={addPostForm} />
      <Route exact path="/:category/posts" component={Home} />
    </section>
  );
};

export default App;
