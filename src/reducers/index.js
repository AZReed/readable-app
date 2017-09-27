import { combineReducers } from "redux";
import { FETCH_POSTS, VOTE_POST } from "../actions";

function posts(state = {}, action) {
  console.log("state", state);
  console.log("action", action);
  switch (action.type) {
    case FETCH_POSTS:
      // return action.posts
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

function categories(state={}, action) {
  switch (action.type) {
  
    default:
      return {foobar: 'here I am'}
  }
}

export default combineReducers({
  posts,
  categories
});
