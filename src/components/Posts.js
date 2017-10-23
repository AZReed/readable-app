import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";
import {
  fetchPosts,
  deletePost,
  votePost,
  fetchCategoryPosts
} from "../actions";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class Posts extends Component {
  componentDidMount() {
    const category = this.props.match.params.category;
    if (category && category.length > 0) {
      this.props.fetchCategoryPosts(category);
    } else {
      this.props.fetchPosts();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const category = this.props.match.params.category;
    if (
      prevProps.match.params.category !== category &&
      (category && category.length > 0)
    ) {
      this.props.fetchCategoryPosts(category);
    }
  }

  delete = postID => {
    this.props.deletePost(postID);
  };

  render() {
    return (
      <div className="container">
        <Link to="/addPost">Add Post</Link>
        {this.props.posts.map((post, index) => (
          <Post
            key={post.id}
            post={post}
            delete={this.props.deletePost}
            votePost={this.props.votePost}
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ posts, comments }, ownProps) {
  //console.log(ownProps)
  posts.allPosts &&
    posts.allPosts.forEach(post => {
      if (posts.deletedPost && post.id === posts.deletedPost.id) {
        post.deleted = true;
      }
    });

  return {
    posts:
      (posts.allPosts && posts.allPosts.filter(post => !post.deleted)) || []
  };
  /*   return {
    posts:
      posts.categoryPosts ||
      (updatedPosts && updatedPosts.filter(post => !post.deleted)) ||
      []
  }; */
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: post => dispatch(deletePost(post)),
    votePost: (postID, vote) => dispatch(votePost(postID, vote)),
    fetchCategoryPosts: category => dispatch(fetchCategoryPosts(category))
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts));
