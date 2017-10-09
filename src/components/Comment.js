import React, { Component } from "react";
import VoteScore from "./VoteScore";
import { connect } from "react-redux";

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
                <a>Edit</a> · <a onClick={() => this.props.deleteComment(comment.id)}>Delete</a> · Posted by <strong>{comment.author} </strong> {handleTime(comment.timestamp)}
              </small>
            </p>
          </div>
        </div>
      </article>
      /*       <div>
        <VoteScore
          voteScore={comment.voteScore}
          vote={voteComment}
          id={comment.id}
        />
        <div>
          <div>{comment.author}</div>
          <div>
            <span>Posted by {handleTime(comment.timestamp)}</span>
          </div>
          <div>
            <p>{comment.body}</p>
          </div>
          <div>
            <a>Reply</a>
          </div>
        </div>
      </div> */
    );
  }
}

function mapStateToProps({ comments }, ownProps) {
  //console.log(comments, ownProps);

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
//export default Comment;
