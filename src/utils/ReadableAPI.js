const api = process.env.REACT_APP_READABLE_API || "http://localhost:5001";

let token = localStorage.token;

if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
  "Content-Type": "application/json"
};

export const fetchPosts = () =>
  fetch(`${api}/posts`, { headers }).then(res => res.json());

export const addPost = post =>
  fetch(`${api}/posts`, {
    method: "POST",
    headers,
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .then(data => data);

export const votePost = (postID, status) =>
  fetch(`${api}/posts/${postID}`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ option: status })
  })
    .then(res => res.json())
    .catch(error => error);

export const deletePost = postID =>
  fetch(`${api}/posts/${postID}`, {
    method: "DELETE",
    headers: headers
  })
    .then(res => res.json())
    .catch(error => error);

export const fetchComments = postID =>
  fetch(`${api}/posts/${postID}/comments`, {
    method: "GET",
    headers
  }).then(res => res.json());

export const voteComment = (postID, status) =>
  fetch(`${api}/comments/${postID}`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ option: status })
  })
    .then(res => res.json())
    .catch(error => error);

export const addComment = comment =>
  fetch(`${api}/comments/`, {
    method: "POST",
    headers,
    // body: JSON.stringify(comment)
    body: JSON.stringify(comment)
  })
    .then(res => res.json())
    .catch(error => error);

export const deleteComment = commentID =>
  fetch(`${api}/comments/${commentID}`, {
    method: "DELETE",
    headers
  })
    .then(res => {
      console.log(res);
      return res.json();
    })
    .catch(error => error);

export const fetchCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .catch(error => error);
