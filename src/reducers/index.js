import { combineReducers } from "redux";
import { FETCH_POSTS, VOTE_POST } from "../actions";

function posts(state = {}, action) {
  console.log('state', state);
  console.log('action', action);
  switch (action.type) {
    case FETCH_POSTS:
      return action.posts

    case VOTE_POST:
      return {...state, post: action.post}

    default:
      return state;
  }
}

/* function categories(state={}, action) {

} */

export default combineReducers({
  posts
});
