import React from "react";
import Comment from "./Comment";
import * as actions from "../actions";
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
  return {
    comments: ownProps.post.comments || []
  };
}


export default connect(mapStateToProps, actions)(Comments);
