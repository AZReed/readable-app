import React from "react";
//import VoteScore from "./VoteScore";
import Comment from "./Comment";
import { voteComment } from "../actions";
//import { Comment } from "semantic-ui-react";
import { connect } from "react-redux";

const Comments = props => {
/*   return (
    <Comment.Group>
      {props.post.comments.map(comment => (
        <Comment key={comment.id}>
          <VoteScore
            voteScore={comment.voteScore}
            vote={props.voteComment}
            id={comment.id}
          />
          <Comment.Content>
            <Comment.Author as="a">{comment.author}</Comment.Author>
            <Comment.Metadata>
              <span>Posted by {props.handleTime(comment.timestamp)}</span>
            </Comment.Metadata>
            <Comment.Text>
              <p>{comment.body}</p>
            </Comment.Text>
            <Comment.Actions>
              <a>Reply</a>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      ))}
    </Comment.Group>
  ); */

  return (
    <div>
      {props.post.comments.map(comment => (
        <Comment 
          key={comment.id}
          comment={comment}
          handleTime={props.handleTime}
          voteComment={props.voteComment}
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
    voteComment: (postID, vote) => dispatch(voteComment(postID, vote))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
//export default Comments;
