import React, { Component } from "react";
//import { Item } from "semantic-ui-react";
import { connect } from "react-redux";
import Post from "./Post";
import { fetchPosts, addComment, deletePost } from "../actions";
import uuid from "uuid";
import { Link } from "react-router-dom";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  reply = post => {
    let id = uuid();
    let comment = {
      id: id.split("-").join(""),
      timestamp: Date.now(),
      title: "foobar",
      body: "body body",
      author: "Alejandro Zamora",
      category: "udacity",
      parentId: post.id,
      deleted: false,
      parentDeleted: false,
      voteScore: 1
    };
    this.props.addComment(comment);
  };

  delete = postID => {
    this.props.deletePost(postID)
  }

  render() {
    return (
      <div className="container">
        <Link to='/post/new'>Add Post</Link>
        {this.props.posts.map((post, index) => (
          <Post key={post.id} post={post} reply={this.reply} delete={this.delete} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ posts, comments }) {
  console.log("mapState posts");

/*   let filteredPosts;
  if (posts.allPosts) {
    filteredPosts = posts.allPosts.map(post => post.deleted)
  }
 */
  return {
    posts: posts.allPosts || []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    addComment: comment => dispatch(addComment(comment)),
    deletePost: post => dispatch(deletePost(post))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
