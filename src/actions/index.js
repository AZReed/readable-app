import * as ReadableAPI from "../utils/ReadableAPI";

export const FETCH_POSTS = "FETCH_POSTS";

/*
let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const BASE_URL = "http://localhost:5001";
const headers = { headers: { Authorization: token } }; */

export function fetchPosts() {
  // console.log("posts in actions", posts);
  ReadableAPI.fetchPosts().then(posts => {
    posts.forEach(post => {
      ReadableAPI.getComments(post.id).then(comments => {
        post.comments = comments || [];
      });
    });
    return (dispatch) => {
      type: FETCH_POSTS,
      posts
    };
  });
  // const posts = axios.get(`${BASE_URL}/posts`, headers);
}
