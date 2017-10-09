import { combineReducers } from "redux";
import { FETCH_POSTS, VOTE_POST, VOTE_COMMENT, ADD_COMMENT, DELETE_COMMENT } from "../actions";

function posts(state = {}, action) {
  // console.log("state", state);
  // console.log("action", action);
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        allPosts: action.posts
      };

    case VOTE_POST:
      return {
        ...state,
        updatedPost: action.post
      };

    default:
      return { ...state };
  }
}

function comments(state = {}, action) {
  // console.log('comments',action)
  switch (action.type) {
    case VOTE_COMMENT:
      return {
        ...state,
        updatedComment: action.comment
      };

    case ADD_COMMENT:
      return {
        ...state,
        addedComment: action.comment
      };

    case DELETE_COMMENT:
      console.log('delete comment', action)
      return {
        ...state,
        deletedComment: action.comment
      }

    default:
      return { ...state };
  }
}

function categories(state = {}, action) {
  switch (action.type) {
    default:
      return { foobar: "here I am" };
  }
}

export default combineReducers({
  posts,
  comments,
  categories
});
