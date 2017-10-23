import React from "react";
//import Posts from "./Posts";
//import Categories from "./Categories";
//import postForm from "./postForm";
import addPostForm from "./addPostForm";
import editPostForm from "./editPostForm";
import commentForm from "./commentForm";
import editCommentForm from "./editCommentForm";
import Post from "./Post";
import Home from "./Home";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <section className="section">
      <div className="container">
        <section className="hero level">
          <div className="hero-body level-item has-text-centered">
            <div className="container">
              <h1 className="title">Readable App</h1>
            </div>
          </div>
        </section>
        <Route exact path="/" component={Home} />
        <Route path="/posts/:category/:id" component={Post} />
        <Route exact path="/editPost/:id" component={editPostForm} />
        <Route exact path="/addPost" component={addPostForm} />
        <Route exact path="/commentForm/:id" component={commentForm} />
        <Route exact path="/editCommentForm/:id" component={editCommentForm} />
        <Route exact path="/:category/posts" component={Home} />
      </div>
    </section>
  );
};

export default App;
