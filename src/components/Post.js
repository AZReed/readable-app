import React, { Component } from "react";
import VoteScore from "./VoteScore";
import Comments from "./Comments";
import { connect } from "react-redux";
import * as moment from "moment";
import { votePost } from "../actions";

class Post extends Component {
  componentDidMount() {
    //console.log(this.props)
    //this.fetchComments()
  }

  handleTime = timestamp => {
    return moment(timestamp).fromNow();
  };

  render() {
    const { post, votePost } = this.props;

    return (
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
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  //console.log("mapstateto single", posts, ownProps);

  if (posts.updatedPost && posts.updatedPost.id === ownProps.post.id) {
    ownProps.post.voteScore = posts.updatedPost.voteScore;
  }

  return {
    post: Object.assign({}, ownProps.post)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    votePost: (postID, vote) => dispatch(votePost(postID, vote))  //Cambiar el vote post a posts para que no lo importe cada rendericazion de post
    //voteComment: (postID, vote) => dispatch(voteComment(postID, vote))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
