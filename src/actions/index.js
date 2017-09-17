export const SET_POSTS = "SET_POSTS";

export function setPosts( posts ) {
  console.log('posts in actions', posts)
  return {
    type: SET_POSTS,
    posts
  };
}