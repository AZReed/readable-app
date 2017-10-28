import React, { Component } from "react";
import addPostForm from "./addPostForm";
import editPostForm from "./editPostForm";
import commentForm from "./commentForm";
import editCommentForm from "./editCommentForm";
import Post from "./Post";
import Home from "./Home";
import notFound from "./notFound";
import { Route, Link } from "react-router-dom";
import { withRouter } from "react-router";

class App extends Component {

  render() {
    return (
      <section className="section">
        <nav className="level" id="header">
          <p className="level-item has-text-centered">
            <a className="link is-info" onClick={() => this.props.history.goBack()}>
              <i className="fa fa-chevron-left" aria-hidden="true" />
            </a>
          </p>
          <p className="level-item has-text-centered">
            <Link to="/" className="link is-info">Home</Link>
          </p>
          <p className="level-item has-text-centered title">Readable App</p>
          <p className="level-item has-text-centered">
            <Link to="/addPost" className="link is-info">Add Post</Link>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info" onClick={() => this.props.history.goForward()}>
              <i className="fa fa-chevron-right" aria-hidden="true" />
            </a>
          </p>
        </nav>

        <div className="container" id="main">
          <Route exact path="/" component={Home} />
          <Route path="/posts/:category/:id" component={Post} />
          <Route exact path="/editPost/:id" component={editPostForm} />
          <Route exact path="/addPost" component={addPostForm} />
          <Route exact path="/commentForm/:id" component={commentForm} />
          <Route
            exact
            path="/editCommentForm/:id"
            component={editCommentForm}
          />
          <Route exact path="/:category/posts" component={Home} />
          <Route exact path="/404" component={notFound} />
        </div>
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p>
                <strong>Readable App</strong> by AZreed. The source code is
                licensed {" "}
                <a href="http://opensource.org/licenses/mit-license.php">
                  MIT
                </a>. The website content is licensed{" "}
                <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                  CC BY NC SA 4.0
                </a>.
              </p>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default withRouter(App);
