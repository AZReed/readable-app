import { combineReducers } from "redux";
import {
  FETCH_POSTS,
  FETCH_POST,
  ADD_POST,
  VOTE_POST,
  DELETE_POST,
  VOTE_COMMENT,
  ADD_COMMENT,
  DELETE_COMMENT,
  FETCH_CATEGORIES
} from "../actions";

function posts(state = {}, action) {
  //console.log("state", state);
  //console.log("action", action);
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        allPosts: action.posts
      };

    case FETCH_POST:
      return {
        ...state,
        post: action.post
      }

    case VOTE_POST:
      return {
        ...state,
        updatedPost: action.post
      };

    case ADD_POST:
      return {
        ...state,
        addedPost: action.newPost
      }

    case DELETE_POST:
      return {
        ...state,
        deletedPost: action.post
      }

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
