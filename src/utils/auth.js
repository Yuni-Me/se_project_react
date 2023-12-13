import api from "./api";
// import { request } from "./api";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwr.undo.it"
    : "http://localhost:3001";

const signin = ({ email, password }) => {
  // email = email.toLowercase();
  return api.request(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
};

const register = ({ email, password, name, avatar }) => {
  // email = email.toLowerCase();
  return api.request(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name, avatar }),
  });
};

const checkToken = (token) => {
  return api.request(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

const editProfile = (data, token) => {
  const { name, avatar, _id: id } = data;
  return api.request(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar, id }),
  });
};

const auth = { signin, register, checkToken, editProfile };

export default auth;
