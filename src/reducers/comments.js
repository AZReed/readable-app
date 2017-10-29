import {
  FETCH_COMMENTS,
  FETCH_COMMENT,
  VOTE_COMMENT,
  ADD_COMMENT,
  DELETE_COMMENT
} from "../actions/actionTypes";

function comments(state = {}, action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        allComments: action.comments
      };

    case FETCH_COMMENT:
      return {
        editComment: action.comment
      };

    case VOTE_COMMENT:
      return {
        ...state,
        updatedComment: action.comment
      };

    case ADD_COMMENT:
      return {
        ...state
      };

    case DELETE_COMMENT:
      return {
        ...state,
        deletedComment: action.comment
      };

    default:
      return { ...state };
  }
}

export default comments;
