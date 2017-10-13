import React, { Component } from "react";
import { fetchCategories,  fetchPost, updatePost } from "../actions";
import { connect } from "react-redux";

class postForm extends Component {
   state = {
    title: '',
    body: ''
  }

  componentDidMount() {
    this.props.fetchCategories();
    console.log(this.props.match.params)
    this.props.fetchPost(this.props.match.params.id);
  }

  categories(post) {
    if (this.props.categories.allCategories) {
      return (
        <select defaultValue={post.category} disabled={true} name="categories">
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

    this.props.updatePost(post);
  }

  backToPosts(event) {
    event.preventDefault();
    this.props.history.push("/");
  }

  change = event => {
      this.setState({
          [event.target.name]: event.target.value
      })
  }

  render() {
    const { post } = this.props;

    console.log(this.props);
    console.log(this.state);

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
                    defaultValue={post.author}
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
                  <div className="select is-fullwidth">
                    {this.categories(post)}
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
                    //defaultValue={post.title}
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
                    //defaultValue={post.body}
                    value={this.state.body}
                    onChange={e => this.change(e)}
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
                {/* <Redirect></Redirect> */}
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
  //console.log(posts, ownProps.match.params.id)

  console.log(this)

  return {
    categories: categories || [],
    post: posts.post || []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchPost: postID => dispatch(fetchPost(postID)),
    updatePost: post => dispatch(updatePost(post))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(postForm);
