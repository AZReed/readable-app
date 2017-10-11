import React, { Component } from "react";
import { fetchCategories } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class addPost extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  state = {
    author: "",
    category: null,
    title: "",
    message: ""
  }


  categories() {
    if (this.props.categories.allCategories) {
      return (
        <select name="categories" onChange={this.handleChange}>
          {this.props.categories.allCategories.map(category => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      );
    }
  }

  handleChange(event) {
    console.log(event.target.name)
    let input_name = event.target.name;

    switch (input_name) {
      case "author":
        this.setState({author: event.target.value})
        break;

      case "categories":
        this.setState({categories: event.target.value})
        break;
    
      default:
        break;
    }
  }

  submit(event) {
    console.log("foobar")
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.submit}>
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
                  <input className="input" type="text" name="author" onChange={this.handleChange} placeholder="Name" />
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
              <input type="submit" className="button is-link" value="Submit" onClick={this.submit} />
            </div>
            <div className="control">
              <button className="button is-text">Cancel</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

function mapStateToProps({ categories }) {
  return {
    categories: categories || []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategories())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(addPost);
