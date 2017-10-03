import React, { Component } from "react";
import { Item } from "semantic-ui-react";
import { connect } from "react-redux";
import Post from "./Post";
// import { votePost } from "../actions";
import { fetchPosts } from "../actions";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;

    return (
      <Item.Group>
        {posts.map((post, index) => (
          <Post key={post.id} post={post} />
        ))}
      </Item.Group>
    );
  }
}

function mapStateToProps({ posts }) {
  console.log("mapstatetoprops posts", posts);

/*   if (posts.allPosts) {
    var procesedPosts = posts.allPosts.map(post => {
      if (posts.updatedPost && post.id === posts.updatedPost.id) {
        let post_copy = Object.assign(post, posts.updatedPost);
        return post_copy;
      }
      return post;
    });
  } */

  return {
    posts: posts.allPosts || []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // votePost: (postID, vote) => dispatch(votePost(postID, vote)),
    fetchPosts: () => dispatch(fetchPosts())
  };
}

// export default connect(mapStateToProps, mapDispatchToProps)(Posts);
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
