import { SELECT_POSTS } from "../actions";
import { combineReducers } from 'redux'

function posts(state = {}, action) {
  switch (action.type) {
    case SELECT_POSTS:
      console.log(action)
      return action.posts

    default:
      return state;
  }
}

/* function categories(state={}, action) {

} */

export default combineReducers({
  posts
});
