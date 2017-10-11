import React, { Component } from "react";
import { fetchCategories, addPost } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import uuid from "uuid";

class addPostForm extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  categories() {
    if (this.props.categories.allCategories) {
      return (
        <select name="categories">
          {this.props.categories.allCategories.map(category => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      );
    }
  }

  handleSubmit(event) {
    let author = document.getElementsByName("author")[0].value;
    let category = document.getElementsByName("categories")[0].value;
    let title = document.getElementsByName("title")[0].value;
    let message = document.getElementsByName("message")[0].value;

    let id = uuid();

    let post = {
      id: id.split("-").join(""),
      timestamp: Date.now(),
      title: title,
      body: message,
      author: author,
      category: category
    };

    this.props.addPost(post);
    event.preventDefault();
  }

  backToPosts(event) {
    console.log(this);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
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
                  <input
                    className="input"
                    type="text"
                    name="author"
                    placeholder="Name"
                  />
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
                  <div className="select is-fullwidth">{this.categories()}</div>
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
                  <input
                    className="input"
                    type="text"
                    name="title"
                    placeholder="Title"
                  />
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
                    name="message"
                    placeholder="Express yourself"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <input
                type="submit"
                className="button is-link"
                value="Submit"
                onClick={this.submit}
              />
            </div>
            <div className="control">
              <button className="button is-text" onClick={event => this.backToPosts(event)}>Cancel</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

function mapStateToProps({ posts, categories }) {
  console.log(posts.addedPost)
  
  return {
    categories: categories || []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    addPost: post => dispatch(addPost(post))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(addPostForm);
