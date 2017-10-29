import {
  FETCH_POSTS,
  FETCH_POST,
  FETCH_CATEGORY_POSTS,
  ADD_POST,
  UPDATE_POST,
  VOTE_POST,
  DELETE_POST,
  SORT_BY,
  CLEAR_SORT
} from "../actions/actionTypes";

function posts(state = {}, action) {
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
      return {
        allPosts: action.posts
      };

    case VOTE_POST:
      if (state.post) {
        action.post.comments = state.post.comments;
      }
      return {
        ...state,
        updatedPost: action.post
      };

    case ADD_POST:
      return {
        ...state
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

export default posts;