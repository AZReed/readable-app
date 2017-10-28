import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";
import * as actions from "../actions";
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

  render() {
    return (
      <div className="container">
        {this.props.posts.map((post, index) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ posts, comments }, ownProps) {

  posts.allPosts &&
    posts.allPosts.forEach(post => {
      if (posts.deletedPost && post.id === posts.deletedPost.id) {
        post.deleted = true;
      }
    });

  return {
    posts:
      posts.sortedPost || (posts.allPosts && posts.allPosts.filter(post => !post.deleted)) || []
  };
}

export default withRouter(connect(mapStateToProps, actions)(Posts));
