import * as ReadableAPI from "../utils/ReadableAPI";

export const FETCH_POSTS = "FETCH_POSTS";
export function fetchPosts() {
/*   return dispatch => {
    ReadableAPI.fetchPosts().then(posts =>
      dispatch({ type: FETCH_POSTS, posts })
    );
  }; */
  return dispatch => {
    ReadableAPI.fetchPosts().then(posts => Promise.all(
        posts.map(post => 
          ReadableAPI.fetchComments(post.id).then( comments =>
            post.comments = comments
          ).then(() => {console.log(post); return post})
        )
      )
    ).then(posts => dispatch({type: FETCH_POSTS, posts}))
  };
}

/* export const FETCH_COMMENTS = "FETCH_COMMENTS";
export function fetchComments(post) {
  ReadableAPI.fetchComments(post.id).then(comments => {
    return comments;
  });
  return dispatch => {
    ReadableAPI.fetchComments(post.id).then(comments => {
      dispatch({ type: FETCH_COMMENTS, comments });
    });
  };
} */
