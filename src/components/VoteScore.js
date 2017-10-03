import React from "react";
import { Icon, Segment } from "semantic-ui-react";

const VoteScore = props => {
  return (
    <div>
      <Segment vertical onClick={() => props.vote(props.id, "upVote")}>
        <Icon link name="chevron up" size="large" />
      </Segment>
      <Segment vertical id="voteScore">
        {props.voteScore}
      </Segment>
      <Segment vertical onClick={() => props.vote(props.id, "downVote")}>
        <Icon link name="chevron down" size="large" />
      </Segment>
    </div>
  );
};

export default VoteScore;
