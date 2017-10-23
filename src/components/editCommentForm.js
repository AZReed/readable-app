import React, { Component } from "react";
//import { fetchPost, addComment } from "../actions";
import { updateComment, fetchComment } from "../actions";
import { connect } from "react-redux";
//import uuid from "uuid";

class editCommentForm extends Component {
  state = {
    author: "",
    body: ""
  };

  componentDidMount() {
    this.props.fetchComment(this.props.match.params.id);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props);
    if (this.state.body === "" && this.props.comment.id) {
      this.setState({
        body: this.props.comment.body,
        author: this.props.comment.author
      });
    }
  }

  backHome(event) {
    event.preventDefault();
    this.props.history.push("/");
  }

  handleSubmit(event) {
		event.preventDefault();
		const comment = this.props.comment;

    //let author = document.getElementsByName("author")[0].value;
    //let body = document.getElementsByName("body")[0].value;

		comment.body = this.state.body;
		comment.timestamp = Date.now();

		console.log(comment);

    this.props.updateComment(comment);
    this.props.history.push("/");
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
                    value={this.state.author}
                    disabled
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

function mapStateToProps({ comments }) {
  //console.log(comments);
  return {
    comment: comments.editComment || []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchComment: commentID => dispatch(fetchComment(commentID)),
    updateComment: comment => dispatch(updateComment(comment))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(editCommentForm);
