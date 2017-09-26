import * as ReadableAPI from "../utils/ReadableAPI";

export const FETCH_POSTS = "FETCH_POSTS";
export function fetchPosts() {
  /*   return dispatch => {
    ReadableAPI.fetchPosts().then(posts =>
      dispatch({ type: FETCH_POSTS, posts })
    );
  }; */
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

export const VOTE_POST = "VOTE_POST";
export function votePost(postID, vote) {
  return dispatch => {
    ReadableAPI.votePost(postID, vote).then(post => dispatch({ type: VOTE_POST, post}));
    // ReadableAPI.votePost(postID, vote).then(post => console.log(post));
  };
}
