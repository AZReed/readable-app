const api = process.env.REACT_APP_READABLE_API || "http://localhost:5001";

let token = localStorage.token;

if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  Authorization: token
};

export const fetchPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data);

export const addPost = () =>
  fetch(`${api}/post`, { method: "POST", headers })
    .then(res => res.json())
    .then(data => console.log(data));

export const fetchComments = postID =>
  fetch(`${api}/posts/${postID}/comments`, { method: "GET", headers })
    .then(res => res.json())
    .then(data => data);

export const fetchCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => console.log(data));
