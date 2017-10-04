import React, { Component } from "react";
import { Item } from "semantic-ui-react";
import { connect } from "react-redux";
import Post from "./Post";
import { fetchPosts } from "../actions";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <Item.Group>
        {this.props.posts.map((post, index) => <Post key={post.id} post={post}/>)}
      </Item.Group>
    );
  }
}

function mapStateToProps({ posts }) {
  //console.log("mapstatetoprops posts", posts);

  return {
    posts: posts.allPosts || []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
