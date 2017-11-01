import React, { Component } from "react";
import VoteScore from "./VoteScore";
import Comments from "./Comments";
import { connect } from "react-redux";
import * as moment from "moment";
import { Link } from "react-router-dom";
import * as actions from "../actions";
import { withRouter } from "react-router";

class Post extends Component {
  componentDidMount() {
    if (this.props.match && this.props.match.params.id) {
      let postID = this.props.match.params.id;
      this.props.fetchPost(postID);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.post.id === undefined) {
      this.props.history.push("/404");
    }
  }

  delete(postID) {
    this.props.deletePost(postID);
    if (this.props.match.params.id) {
      this.props.history.push("/");
    }
  }

  handleTime = timestamp => {
    return moment(timestamp).fromNow();
  };

  render() {
    const { post, votePost } = this.props;

    return (
      <article className="media">
        <div className="media-left">
          <VoteScore voteScore={post.voteScore} vote={votePost} id={post.id} />
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <Link to={`/posts/${post.category}/${post.id}`}>
                <strong>{post.title}</strong>
              </Link>
              <br />
              {post.body}
              <br />
              <small>
                <Link to={`/commentForm/${post.id}`}>Reply</Link> · {" "}
                <Link to={`/editPost/${post.id}`}>Edit</Link> · {" "}
                <a onClick={() => this.delete(post.id)}>Delete</a> · Posted by{" "}
                <strong>{post.author}</strong> {this.handleTime(post.timestamp)}{" "}
                | ({post.comments ? post.comments.length : 0}) comments
                | {post.category}
              </small>
            </p>
          </div>

          {post.comments && (
            <Comments post={post} handleTime={this.handleTime} />
          )}
        </div>
      </article>
    );
  }
}

function mapStateToProps({ posts, comments }, ownProps) {
  if (posts.post) {
    if (posts.updatedPost && posts.updatedPost.id === posts.post.id) {
      posts.post.voteScore = posts.updatedPost.voteScore;
    }

    if (
      comments.deletedComment &&
      comments.deletedComment.parentId === posts.post.id
    ) {
      if (posts.post.comments.length > 0) {
        posts.post.comments = posts.post.comments.filter(comment => {
          if (comment.id === comments.deletedComment.id) {
            return false;
          }
          return true;
        });
      }
    }
    
    return { post: Object.assign({}, posts.post) };
  }

  if (
    ownProps.post &&
    posts.updatedPost &&
    posts.updatedPost.id === ownProps.post.id
  ) {
    ownProps.post.voteScore = posts.updatedPost.voteScore;
  }

  if (
    comments.deletedComment &&
    comments.deletedComment.parentId === ownProps.post.id
  ) {
    if (ownProps.post.comments.length > 0) {
      ownProps.post.comments = ownProps.post.comments.filter(comment => {
        if (comment.id === comments.deletedComment.id) {
          return false;
        }
        return true;
      });
    }
  }

  return {
    post: Object.assign({}, ownProps.post)
  };
}

export default withRouter(connect(mapStateToProps, actions)(Post));
