import React, { Component } from "react";
import VoteScore from "./VoteScore";
import { connect } from "react-redux";

class Comment extends Component {
  render() {
    const { comment, voteComment, handleTime } = this.props;

    //console.log(this.props);

    return (
      <div>
        <VoteScore
          voteScore={comment.voteScore}
          vote={voteComment}
          id={comment.id}
        />
        <div>
          <div as="a">{comment.author}</div>
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
      </div>
    );
  }
}

function mapStateToProps({comments}, ownProps) {
  console.log(comments, ownProps)

  if (comments.updatedComment && comments.updatedComment.id === ownProps.comment.id) {
    ownProps.comment.voteScore = comments.updatedComment.voteScore;
  }
  
  return {
    comment: Object.assign({}, ownProps.comment)
  }
}

export default connect(mapStateToProps)(Comment);
//export default Comment;
