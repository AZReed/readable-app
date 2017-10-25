import * as ReadableAPI from "../utils/ReadableAPI";

export const FETCH_POSTS = "FETCH_POSTS";
export function fetchPosts() {
  return dispatch => {
    ReadableAPI.fetchPosts()
      .then(posts =>
        Promise.all(
          posts.map(post =>
            ReadableAPI.fetchComments(post.id)
              .then(comments => (post.comments = comments))
              .then(() => post)
          )
        )
      )
      .then(posts => dispatch({ type: FETCH_POSTS, posts }));
  };
}

export const FETCH_CATEGORY_POSTS = "FETCH_CATEGORY_POSTS";
export function fetchCategoryPosts(category) {
  return dispatch => {
    ReadableAPI.fetchCategoryPosts(category)
      .then(posts =>
        Promise.all(
          posts.map(post =>
            ReadableAPI.fetchComments(post.id)
              .then(comments => (post.comments = comments))
              .then(() => post)
          )
        )
      )
      .then(posts => dispatch({ type: FETCH_CATEGORY_POSTS, posts }));
  };
}

export const FETCH_POST = "FETCH_POST";
export function fetchPost(postID) {
  return dispatch => {
    ReadableAPI.fetchPost(postID)
    .then(post =>
      ReadableAPI.fetchComments(post.id)
        .then(comments => (post.comments = comments))
        .then(() => post)
    )
    .then(post => dispatch({ type: FETCH_POST, post }));
  };
}

export const ADD_POST = "ADD_POST";
export function addPost(post) {
  return dispatch => {
    ReadableAPI.addPost(post).then(newPost =>
      dispatch({ type: ADD_POST, newPost })
    );
  };
}

export const UPDATE_POST = "UPDATE_POST";
export function updatePost(post) {
  return dispatch => {
    ReadableAPI.updatePost(post).then(updatedPost =>
      dispatch({ type: UPDATE_POST, post: updatedPost })
    );
  };
}

export const VOTE_POST = "VOTE_POST";
export function votePost(postID, vote) {
  return dispatch => {
    ReadableAPI.votePost(postID, vote).then(post =>
      dispatch({ type: VOTE_POST, post })
    );
  };
}

export const DELETE_POST = "DELETE_POST";
export function deletePost(postID) {
  return dispatch => {
    ReadableAPI.deletePost(postID).then(post =>
      dispatch({ type: DELETE_POST, post })
    );
  };
}

export const FETCH_COMMENTS = "FETCH_COMMENTS";
export function fetchComments(postID) {
  return dispatch => {
    ReadableAPI.fetchComments(postID).then(comments =>
      dispatch({ type: FETCH_COMMENTS, comments })
    );
  };
}

export const FETCH_COMMENT = "FETCH_COMMENT";
export function fetchComment(commentID) {
  return dispatch => {
    ReadableAPI.fetchComment(commentID).then(comment =>
      dispatch({ type: FETCH_COMMENT, comment })
    );
  };
}

export const VOTE_COMMENT = "VOTE_COMMENT";
export function voteComment(postID, vote) {
  return dispatch => {
    ReadableAPI.voteComment(postID, vote).then(comment =>
      dispatch({ type: VOTE_COMMENT, comment })
    );
  };
}

export const ADD_COMMENT = "ADD_COMMENT";
export function addComment(comment) {
  return dispatch => {
    ReadableAPI.addComment(comment).then(comment =>
      dispatch({ type: ADD_COMMENT, comment })
    );
  };
}

export const UPDATE_COMMENT = "UPDATE_COMMENT";
export function updateComment(comment) {
  return dispatch => {
    ReadableAPI.updateComment(comment).then(comment =>
      dispatch({ type: UPDATE_COMMENT, comment })
    );
  };
}

export const DELETE_COMMENT = "DELETE_COMMENT";
export function deleteComment(commentID) {
  return dispatch => {
    ReadableAPI.deleteComment(commentID).then(comment =>
      dispatch({ type: DELETE_COMMENT, comment })
    );
  };
}

export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export function fetchCategories() {
  return dispatch => {
    ReadableAPI.fetchCategories().then(categories =>
      dispatch({ type: FETCH_CATEGORIES, categories })
    );
  };
}

export const SORT_BY = "SORT_BY";
export function sortBy(arg) {
  return dispatch => {
    dispatch({ type: SORT_BY, arg });
  };
}

export const CLEAR_SORT = "CLEAR_SORT";
export function clearSort() {
  return dispatch => {
    dispatch({ type: CLEAR_SORT });
  };
}
