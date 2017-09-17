import { SET_POSTS } from "../actions";
import { combineReducers } from 'redux'

function posts(state = {}, action) {
  console.log('posts in reducers', action.posts)
  switch (action.type) {
    case SET_POSTS:
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