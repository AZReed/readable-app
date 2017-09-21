import React, { Component } from "react";
import { Item, Label, Divider } from "semantic-ui-react";
import { connect } from "react-redux";
// import * as ReadableAPI from "../utils/ReadableAPI";

class Posts extends Component {
  componentDidMount() {
    /*     if (this.props.posts.length) {
      this.props.posts.forEach(post => {
        console.log(post);
      });
    } */
  }

  render() {
    const posts = this.props.posts || [];

    return (
      <Item.Group>
        {posts.length &&
          posts.map((post, index) => (
            <Item key={post.id}>
              <Item.Content>
                <Item.Header>{post.title}</Item.Header>
                <Item.Meta>
                  {post.author} ({post.comments.length} comments)
                </Item.Meta>
                <Item.Description>{post.body}</Item.Description>
                <Item.Extra>
                  <Label as="a" color="blue" tag size="tiny">
                    {post.category}
                  </Label>
                </Item.Extra>
              </Item.Content>
              <Divider />
            </Item>
          ))}
      </Item.Group>
    );
  }
}

function mapStateToProps({ posts }) {
  if (posts.length) {
    posts.forEach(post => {
      //fetchComments(post)
      //console.log(foo)
    });
  }
  return {
    posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // vote: data => dispatch(votePost(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);