export const SELECT_POSTS = "SELECT_POSTS";

export function selectPosts(posts) {
  return {
    type: SELECT_POSTS,
    posts: posts
  };
}
