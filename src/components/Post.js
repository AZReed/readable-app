import React from "react";
import { Item, Label, Icon, Segment } from "semantic-ui-react";
import * as moment from "moment";

const Post = props => {
  function handleTime(timestamp) {
    return moment(timestamp).fromNow();
  }

  return (
    <Item>
      <div id="post">
        <div>
          <Segment vertical onClick={() => props.vote(props.post.id, "upVote")}>
            <Icon link name="chevron up" size="large" />
          </Segment>
          <Segment vertical id="voteScore">
            {props.post.voteScore}
          </Segment>
          <Segment vertical onClick={() => props.vote(props.post.id, "downVote")}>
            <Icon link name="chevron down" size="large" />
          </Segment>
        </div>
        <Item.Content>
          <Item.Header>{props.post.title}</Item.Header>
          <Item.Description>{props.post.body}</Item.Description>
          <Item.Meta>
            by {props.post.author} {handleTime(props.post.timestamp)}|{" "}
            {props.post.comments.length} comments |
            <Label as="a" color="blue" size="tiny">
              {props.post.category}
            </Label>
          </Item.Meta>
          {/*                 <Item.Extra>
            <Label as="a" color="blue" size="tiny">
              {props.post.category}
            </Label>
          </Item.Extra> */}
        </Item.Content>
      </div>
    </Item>
  );
};

export default Post;
