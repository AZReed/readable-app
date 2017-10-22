import React, { Component } from "react";
import VoteScore from "./VoteScore";
import Comments from "./Comments";
import { connect } from "react-redux";
import * as moment from "moment";
import { Link } from "react-router-dom";

class Post extends Component {
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
              <strong>{post.title}</strong>
              <br />
              {post.body}
              <br />
              <small>
                <Link to={`/commentForm/${post.id}`}>Reply</Link> ·
                <Link to={`/editPost/${post.id}`}>Edit</Link> · {" "}
                <a onClick={() => this.props.delete(post.id)}>Delete</a> · {" "}
                Posted by <strong>{post.author}</strong>{" "}
                {this.handleTime(post.timestamp)} | {post.category}
              </small>
            </p>
          </div>

          <Comments post={post} handleTime={this.handleTime} />
        </div>
      </article>
    );
  }
}

function mapStateToProps({ posts, comments }, ownProps) {
  //console.log("mapstateto single", posts, ownProps);
  //console.log("mapState post", comments);

  if (posts.updatedPost && posts.updatedPost.id === ownProps.post.id) {
    ownProps.post.voteScore = posts.updatedPost.voteScore;
  }

/*   if (
    comments.addedComment &&
    comments.addedComment.parentId === ownProps.post.id
  ) {
    ownProps.post.comments.push(comments.addedComment);
  } */

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

  //ownProps.post.comments = ownProps.post.comments.sort( (comment, foobar) => {console.log(foobar); return comment.timestamp < foobar.timestamp})

  return {
    post: Object.assign({}, ownProps.post)
  };
}

export default connect(mapStateToProps, null)(Post);
