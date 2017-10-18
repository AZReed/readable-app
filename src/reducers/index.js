import { combineReducers } from "redux";
import {
  FETCH_POSTS,
  FETCH_POST,
  FETCH_CATEGORY_POSTS,
  ADD_POST,
  UPDATE_POST,
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
        allPosts: action.posts
      };

    case FETCH_POST:
      return {
        ...state,
        post: action.post
      }

    case FETCH_CATEGORY_POSTS:
      return {
        ...state,
        categoryPosts: action.posts
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

    case UPDATE_POST:
      return {
        foobar: action.post
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
