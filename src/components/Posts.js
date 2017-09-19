import React, { Component } from "react";
import { Item, Label, Divider } from "semantic-ui-react";
import { connect } from "react-redux";
// import * as ReadableAPI from "../utils/ReadableAPI";

class Posts extends Component {
  render() {
    const posts = this.props.posts || [];

    console.log(this.props.posts)

    const checkIfCommentsExists = function(post){
      console.log('posts.js', post.comments)
/*       if(post.comments.length){
        return 'con comentarios';
      }
      return 'sin comentarios'; */
    }

    return (
      <Item.Group>
        {posts.length &&
          posts.map( (post, index) => (
            <Item key={post.id}>
              <Item.Content>
                <Item.Header>{post.title}</Item.Header>
                <Item.Meta>{post.author} {checkIfCommentsExists(post)}</Item.Meta>
                <Item.Description>{post.body}</Item.Description>
                <Item.Extra>
                  <Label as="a" color="blue">
                    {post.category}
                  </Label>
                </Item.Extra>
              </Item.Content>
              <Divider></Divider>
            </Item>
          ))}
      </Item.Group>
    );
  }
}

function mapStateToProps({ posts }) {
  return {
    posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // vote: data => dispatch(votePost(data)),
    // vote: data => dispatch(votePost(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);