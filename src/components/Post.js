import React, { Component } from 'react';
import VoteScore from "./VoteScore";
import Comments from "./Comments";
import { connect } from "react-redux";
import { Item, Label, Comment } from "semantic-ui-react";
import * as moment from "moment";
import { votePost } from "../actions";
import { voteComment } from "../actions";

class Post extends Component {
  componentDidMount() {
    //console.log(this.props)
    //this.fetchComments()
  }

  handleTime = timestamp => {
    return moment(timestamp).fromNow();
  }

  render(){
    return (
      <Item>
        <div id="post">
          <VoteScore
            voteScore={this.props.post.voteScore}
            vote={this.props.votePost}
            id={this.props.post.id}
          />
          <Item.Content>
            <Item.Header>{this.props.post.title}</Item.Header>
            <Item.Description>{this.props.post.body}</Item.Description>
            <Item.Meta>
              Posted by {this.props.post.author} {this.handleTime(this.props.post.timestamp)}|{" "}
              {this.props.post.comments.length} comments |
              <Label as="a" color="blue" size="tiny">
                {this.props.post.category}
              </Label>
            </Item.Meta>
          </Item.Content>
  
          <Comments />
  
          <Comment.Group>
            {this.props.post.comments.map(comment => (
              <Comment key={comment.id}>
                <VoteScore
                  voteScore={comment.voteScore}
                  //vote={this.props.voteComment}
                  id={comment.id}
                />
                <Comment.Content>
                  <Comment.Author as="a">{comment.author}</Comment.Author>
                  <Comment.Metadata>
                    <span>Posted by {this.handleTime(comment.timestamp)}</span>
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
        </div>
      </Item>
    );
  }
};

/* function mapStateToProps({ comments }, ownProps) {
  console.log("mapStateToProps single post", ownProps)
  if (comments.updatedComment) {
    var processedComments = ownProps.post.comments.map(comment => {
      if (comment.id === comments.updatedComment.id) {
        let comment_copy = Object.assign(comment, comments.updatedComment);
        console.log(comment_copy);
        return comment_copy;
      }
      return comment;
    });
    var post = Object.assign({}, ownProps.post);
    post.comments = processedComments;
  }

  return {
    // post: post || ownProps.post
    post: ownProps.post
  };
} */

function mapStateToProps({ posts }, ownProps) {
  console.log("mapstateto single", posts, ownProps);

  if (posts.updatedPost && posts.updatedPost.id === ownProps.post.id) {
    // var updated = Object.assign(posts.updatedPost.comments, ownProps.post.comments)
    //posts.updatedPost.comments = ownProps.post.comments;
    ownProps.post.voteScore = posts.updatedPost.voteScore
    //var updated = posts.updatedPost;
  }

  return {
    //post: updated || ownProps.post
    post: Object.assign({}, ownProps.post) || ownProps.post
  };
}

function mapDispatchToProps(dispatch) {
  return {
    votePost: (postID, vote) => dispatch(votePost(postID, vote)),
    //voteComment: (postID, vote) => dispatch(voteComment(postID, vote))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
//export default Post;
