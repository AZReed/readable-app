import React from "react";

const VoteScore = props => {
  return (
    <div>
      <div onClick={() => props.vote(props.id, "upVote")}>
        <i className="fa fa-chevron-up" aria-hidden="true"></i>
      </div>
      <div id="voteScore">
        {props.voteScore}
      </div>
      <div onClick={() => props.vote(props.id, "downVote")}>
        <i className="fa fa-chevron-down" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default VoteScore;
