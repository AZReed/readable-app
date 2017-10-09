import React from "react";
import Comment from "./Comment";
import { voteComment, deleteComment } from "../actions";
import { connect } from "react-redux";

const Comments = props => {
  return (
    <div>
      {props.post.comments.map(comment => (
        <Comment
          key={comment.id}
          comment={comment}
          handleTime={props.handleTime}
          voteComment={props.voteComment}
          deleteComment={props.deleteComment}
        />
      ))}
    </div>
  );
};

function mapStateToProps({ posts }, ownProps) {
  //console.log(ownProps.post);

  return {
    comments: ownProps.post.comments || []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    voteComment: (postID, vote) => dispatch(voteComment(postID, vote)),
    deleteComment: commentID => dispatch(deleteComment(commentID))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
//export default Comments;
