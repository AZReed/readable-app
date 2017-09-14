import React, { Component } from "react";
import { Item } from "semantic-ui-react";
import * as ReadableAPI from "../utils/ReadableAPI";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    const posts = ReadableAPI.getAllPosts().then(posts =>
      this.setState({ posts })
    );
    // this.setState( {posts} )
  }

  render() {
    return (
      <Item.Group>
        {this.state.posts.map( post => (
          <Item>
            <Item.Content>
              <Item.Header>
                {post.id}
              </Item.Header>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    );
  }
}

export default Posts;