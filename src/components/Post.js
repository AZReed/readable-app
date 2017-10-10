import React, { Component } from "react";
import VoteScore from "./VoteScore";
import Comments from "./Comments";
import { connect } from "react-redux";
import * as moment from "moment";
import { votePost } from "../actions";
import * as ReadableAPI from "../utils/ReadableAPI";

class Post extends Component {
  componentDidMount() {
    //console.log(this.props)
    //this.fetchComments()
  }

  giveMeComments(post) {
    ReadableAPI.fetchComments(post.id)
      .then(comments => (post.comments = comments))
      .then(() => console.log(post));
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
              <strong>{post.title}</strong>
              <br />
              {post.body}
              <br />
              <small>
                <a onClick={() => this.giveMeComments(post)}>Edit</a> ·{" "}
                <a onClick={() => this.props.reply(post)}>Reply</a> · Posted by{" "}
                <strong>{post.author}</strong> {this.handleTime(post.timestamp)}{" "}
                | {post.category}
              </small>
            </p>
          </div>

          <Comments post={post} handleTime={this.handleTime} />
        </div>
        {/*       
      <div className="box">
        <div id="post">
          <VoteScore
            voteScore={post.voteScore}
            vote={votePost}
            id={post.id}
          />
          <div>
            <div>{post.title}</div>
            <div>{post.body}</div>
            <div>
              Posted by {post.author} {this.handleTime(post.timestamp)}|{" "}
              {post.comments.length} comments |
              <div>
                {post.category}
              </div>
            </div>
          </div>

          <Comments post={post} handleTime={this.handleTime} />
        </div>
      </div>*/}
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

  if (
    comments.addedComment &&
    comments.addedComment.parentId === ownProps.post.id
  ) {
    ownProps.post.comments.push(comments.addedComment);
  }

  if ( comments.deletedComment && comments.deletedComment.parentId === ownProps.post.id ) {
    if (ownProps.post.comments.length > 0) {
      console.log("dentro 2");
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

function mapDispatchToProps(dispatch) {
  return {
    votePost: (postID, vote) => dispatch(votePost(postID, vote)) //Cambiar el vote post a posts para que no lo importe cada rendericazion de post
    //voteComment: (postID, vote) => dispatch(voteComment(postID, vote))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
