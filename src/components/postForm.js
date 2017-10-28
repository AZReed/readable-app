import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import uuid from "uuid";

class postForm extends Component {
  /*   state = {
    header: '',
    author: this.props.post ? this.props.post.author : '',
    category: '',
    title: '',
    message: ''
  } */

  componentDidMount() {
    this.props.fetchCategories();

    if (this.props.match.params.id !== "new") {
      this.props.fetchPost(this.props.match.params.id);
    }
  }

  categories(post, disabled = "") {
    if (this.props.categories.allCategories) {
      return (
        <select defaultValue={post.category} disabled name="categories">
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
    event.preventDefault();
    let author = document.getElementsByName("author")[0].value;
    let category = document.getElementsByName("categories")[0].value;
    let title = document.getElementsByName("title")[0].value;
    let message = document.getElementsByName("message")[0].value;

    let post = {
      timestamp: Date.now(),
      title: title,
      body: message,
      author: author,
      category: category
    };

    if (this.props.match.params.id !== "new") {
      this.props.updatePost(post);
    } else {
      let id = uuid();
      post.id = id.split("-").join("");
      this.props.addPost(post);
    }
  }

  backToPosts(event) {
    event.preventDefault();
    //console.log(this.props.history.push("/"));
    this.props.history.push("/");
  }

  render() {
    const { post } = this.props;

    let disabled = '';
    if (this.props.match.params.id !== "new") {
      disabled = 'disabled'
    }

    return (
      <div className="container">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Add Post</h1>
            </div>
          </div>
        </section>
        <form onSubmit={event => this.handleSubmit(event)}>
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
                    value={post.author}
                    disabled
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
                  <div className="select is-fullwidth">
                    {this.categories(post, disabled)}
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
                  <input
                    className="input"
                    type="text"
                    name="title"
                    value={post.title}
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
                    value={post.body}
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
              <input type="submit" className="button is-link" value="Submit" />
            </div>
            <div className="control">
              <button
                className="button is-text"
                onClick={event => this.backToPosts(event)}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ posts, categories }, ownProps) {

  return {
    categories: categories || [],
    post: posts.post || []
  };
}

export default connect(mapStateToProps, actions)(postForm);
