import React from "react";
import VoteScore from "./VoteScore";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Comment = props => {
  return (
    <article className="media">
      <div className="media-left">
        <VoteScore
          voteScore={props.comment.voteScore}
          vote={props.voteComment}
          id={props.comment.id}
        />
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            {props.comment.body}
            <br />
            <small>
              <Link to={`/editCommentForm/${props.comment.id}`}>Edit</Link> · {" "}
              <a onClick={() => props.deleteComment(props.comment.id)}>
                Delete
              </a>{" "}
              · Posted by <strong>{props.comment.author} </strong>{" "}
              {props.handleTime(props.comment.timestamp)}
            </small>
          </p>
        </div>
      </div>
    </article>
  );
};

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
