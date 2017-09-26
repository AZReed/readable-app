import React, { Component } from "react";
import { Item, Label, Icon, Segment } from "semantic-ui-react";
import * as moment from "moment";

class Post extends Component {
  handleTime(timestamp) {
/*     let date = new Date(timestamp);
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    let formattedTime = year + " " +
      hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    return formattedTime; */

    return moment(timestamp).fromNow();
  }

  render() {
    const { post, vote } = this.props;
    return (
      <Item>
        <div id="post">
          <div>
            <Segment vertical onClick={() => vote(post.id, "upVote")}>
              <Icon link name="chevron up" size="large" />
            </Segment>
            <Segment vertical id="voteScore">
              {post.voteScore}
            </Segment>
            <Segment vertical onClick={() => vote(post.id, "downVote")}>
              <Icon link name="chevron down" size="large" />
            </Segment>
          </div>
          <Item.Content>
            <Item.Header>{post.title}</Item.Header>
            <Item.Description>{post.body}</Item.Description>
            <Item.Meta>
              by {post.author} {this.handleTime(post.timestamp)}|{" "}
              {post.comments.length} comments |
              <Label as="a" color="blue" size="tiny">
                {post.category}
              </Label>
            </Item.Meta>
            {/*                 <Item.Extra>
            <Label as="a" color="blue" size="tiny">
              {post.category}
            </Label>
          </Item.Extra> */}
          </Item.Content>
        </div>
      </Item>
    );
  }
}

export default Post;
