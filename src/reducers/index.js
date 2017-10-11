import { combineReducers } from "redux";
import {
  FETCH_POSTS,
  VOTE_POST,
  VOTE_COMMENT,
  ADD_COMMENT,
  DELETE_COMMENT,
  FETCH_CATEGORIES
} from "../actions";

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
      return {
        ...state,
        deletedComment: action.comment
      };

    default:
      return { ...state };
  }
}

function categories(state = {}, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        allCategories: action.categories.categories
      };

    default:
      return { ...state };
  }
}

export default combineReducers({
  posts,
  comments,
  categories
});
