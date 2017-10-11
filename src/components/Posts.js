import React, { Component } from "react";
//import { Item } from "semantic-ui-react";
import { connect } from "react-redux";
import Post from "./Post";
import { fetchPosts, addComment } from "../actions";
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

  render() {
    return (
      <div className="container">
        <Link to='/post'>Add Post</Link>
        {this.props.posts.map((post, index) => (
          <Post key={post.id} post={post} reply={this.reply} />
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
    addComment: comment => dispatch(addComment(comment))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
