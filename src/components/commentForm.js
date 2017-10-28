import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import uuid from "uuid";

class commentForm extends Component {
  componentDidMount() {
    //this.props.fetchPost(this.props.match.params.id);
  }

  backHome(event) {
    event.preventDefault();
    this.props.history.push("/");
  }

  handleSubmit(event) {
    event.preventDefault();

    let author = document.getElementsByName("author")[0].value;
    let message = document.getElementsByName("message")[0].value;

    let id = uuid();
    let comment = {
      id: id.split("-").join(""),
      timestamp: Date.now(),
      body: message,
      author: author,
      parentId: this.props.match.params.id,
      deleted: false,
      parentDeleted: false,
      voteScore: 1
    };

    this.props.addComment(comment);
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="container">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Comment Post</h1>
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
              <label className="label">Comment Message</label>
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
              <input type="submit" className="button is-link" value="Submit" />
            </div>
            <div className="control">
              <button
                className="button is-text"
                onClick={event => this.backHome(event)}
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

export default connect(null, actions)(commentForm);
