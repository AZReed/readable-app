const api = process.env.REACT_APP_READABLE_API || "http://localhost:5001";

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  Authorization: token
};

export const getAll = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => console.log(data))
