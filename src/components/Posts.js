import React from "react";
import { Item } from "semantic-ui-react";
import { connect } from "react-redux";
import Post from "./Post";
import { votePost } from "../actions";
// import * as ReadableAPI from "../utils/ReadableAPI";

const Posts = props => {
  return (
    <Item.Group>
      {props.posts.length &&
        props.posts.map(post => (
          <Post key={post.id} post={post} vote={props.vote} />
        ))}
    </Item.Group>
  );
};

function mapStateToProps({ state, posts }) {
  return {
    posts: posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    vote: (postID, v) => dispatch(votePost(postID, v))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
