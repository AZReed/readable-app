import React from "react";
import Posts from "./Posts";
import Categories from "./Categories";
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
      <Route
        exact
        path="/post"
        render={() => (
          <div className="container">
            <section className="hero">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title">Add Post</h1>
                </div>
              </div>
            </section>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Author</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded has-icons-left">
                    <input className="input" type="text" placeholder="Name" />
                    <span className="icon is-small is-left">
                      <i className="fa fa-user" />
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Category</label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <div className="control">
                    <div className="select is-fullwidth">
                      <select>
                        <option value="udacity">Udacity</option>
                        <option value="2">Marketing</option>
                        <option value="3">Sales</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Title</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded">
                    <input className="input" type="text" placeholder="Title" />
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Post Message</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Express yourself"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Submit</button>
              </div>
              <div className="control">
                <button className="button is-text">Cancel</button>
              </div>
            </div>
          </div>
        )}
      />
    </section>
  );
};

export default App;
