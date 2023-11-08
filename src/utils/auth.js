import api from "./api";

const baseUrl = "http://localhost:3001";

const signin = ({ email, password }) => {
  // email = email.toLowercase();
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(api.checkServerResponse);
};

const register = ({ email, password, name, avatar }) => {
  // email = email.toLowerCase();
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name, avatar }),
  }).then(api.checkServerResponse);
};

const checkToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(api.checkServerResponse);
};

const editProfile = (data, token) => {
  const { name, avatar, id } = data;
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar, id }),
  }).then(api.checkServerResponse);
};

const auth = { signin, register, checkToken, editProfile };

export default auth;
