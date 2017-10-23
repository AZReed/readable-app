import React, { Component } from "react";
import VoteScore from "./VoteScore";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Comment extends Component {
  render() {
    const { comment, voteComment, handleTime } = this.props;

    return (
      <article className="media">
        <div className="media-left">
          <VoteScore
            voteScore={comment.voteScore}
            vote={voteComment}
            id={comment.id}
          />
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              {comment.body}
              <br />
              <small>
                <Link to={`/editCommentForm/${comment.id}`}>Edit</Link> · {" "}
                <a onClick={() => this.props.deleteComment(comment.id)}>
                  Delete
                </a>{" "}
                · Posted by <strong>{comment.author} </strong>{" "}
                {handleTime(comment.timestamp)}
              </small>
            </p>
          </div>
        </div>
      </article>
    );
  }
}

function mapStateToProps({ comments }, ownProps) {
  if (
    comments.updatedComment &&
    comments.updatedComment.id === ownProps.comment.id
  ) {
    ownProps.comment.voteScore = comments.updatedComment.voteScore;
  }

  return {
    comment: Object.assign({}, ownProps.comment)
  };
}

export default connect(mapStateToProps)(Comment);
