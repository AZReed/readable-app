import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";

class postForm extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchPost(this.props.match.params.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.body === "" && this.props.post.id) {
      this.setState({
        body: this.props.post.body,
        title: this.props.post.title
      });
    }
  }

  categories() {
    if (this.props.categories.allCategories) {
      return (
        <select
          value={this.props.post.category}
          disabled={true}
          name="categories"
        >
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
    let id = document.getElementsByName("id")[0].value;
    let author = document.getElementsByName("author")[0].value;
    let category = document.getElementsByName("categories")[0].value;
    let title = document.getElementsByName("title")[0].value;
    let body = document.getElementsByName("body")[0].value;

    let post = {
      id: id,
      timestamp: Date.now(),
      title: title,
      body: body,
      author: author,
      category: category
    };

    this.props.updatePost(post);
    this.props.history.push("/");
  }

  backToPosts(event) {
    event.preventDefault();
    this.props.history.goBack();
  }

  change = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Edit Post</h1>
            </div>
          </div>
        </section>
        {/* 
        <nav className="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
          <ul>
            <li><a href="/">Readable App</a></li>
            <li>Edit Post</li>
            <li>{this.props.post.id}</li>
          </ul>
        </nav> */}

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
                    value={this.props.post.author}
                    disabled={true}
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
                    onChange={e => this.change(e)}
                    value={this.state.title}
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
                    value={this.state.body}
                    onChange={e => this.change(e)}
                    className="textarea"
                    name="body"
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
          <input hidden value={this.props.post.id} name="id" />
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
