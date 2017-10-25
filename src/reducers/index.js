import { combineReducers } from "redux";
import {
  FETCH_POSTS,
  FETCH_POST,
  FETCH_CATEGORY_POSTS,
  ADD_POST,
  UPDATE_POST,
  VOTE_POST,
  DELETE_POST,
  FETCH_COMMENTS,
  FETCH_COMMENT,
  VOTE_COMMENT,
  ADD_COMMENT,
  DELETE_COMMENT,
  FETCH_CATEGORIES,
  SORT_BY,
  CLEAR_SORT
} from "../actions";

/* function operator(op) {
  switch (op) {
    case ">":
      return function(a, b) {
        return a - b;
      };
      break;
    case "<":
      return function(a, b) {
        return b - a;
      };

    case "clear":
      return function() {};

    default:
      break;
  }
} */

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
        post: action.post
      };

    case FETCH_CATEGORY_POSTS:
      //delete state.sortedPost;
      //delete state.post;
      return {
        allPosts: action.posts
      };

    case VOTE_POST:
      return {
        ...state,
        updatedPost: action.post
      };

    case ADD_POST:
      return {
        ...state,
        //addedPost: action.newPost
      };

    case UPDATE_POST:
      return {
        updatedPost: action.post
      };

    case DELETE_POST:
      return {
        ...state,
        deletedPost: action.post
      };

    case SORT_BY:
      //console.log(action);
      let posts = Object.assign([], state.allPosts);
      return {
        ...state,
        sortedPost: posts.sort((a, b) => b[action.arg] - a[action.arg])
      };

    case CLEAR_SORT:
      delete state.sortedPost;
      return {
        ...state
      };

    default:
      return { ...state };
  }
}

function comments(state = {}, action) {
  // console.log('comments',action)
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        allComments: action.comments
      }

    case FETCH_COMMENT:
      return {
        editComment: action.comment
      }

    case VOTE_COMMENT:
      return {
        ...state,
        updatedComment: action.comment
      };

    case ADD_COMMENT:
      return {
        ...state,
        //addedComment: action.comment
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
