import React from "react";

const VoteScore = props => {
  return (
    <div>
      <div onClick={() => props.vote(props.id, "upVote")}>
        {/* <div link name="chevron up" size="large" /> */}
        <i className="fa fa-chevron-up" aria-hidden="true"></i>
      </div>
      <div id="voteScore">
        {props.voteScore}
      </div>
      <div onClick={() => props.vote(props.id, "downVote")}>
        {/* <div link name="chevron down" size="large" /> */}
        <i className="fa fa-chevron-down" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default VoteScore;
