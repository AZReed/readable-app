import { combineReducers } from "redux";
import { FETCH_POSTS, VOTE_POST } from "../actions";

function posts(state = {}, action) {
  console.log('state', state);
  console.log('action', action);
  switch (action.type) {
    case FETCH_POSTS:
      // return action.posts
      const { posts } = action;
      return [...state, ...posts]
      
      case VOTE_POST:
      const { post } = action;
      return {...state,  ...post}

    default:
      return [...state];
  }
}

/* function categories(state={}, action) {

} */

export default combineReducers({
  posts
});
