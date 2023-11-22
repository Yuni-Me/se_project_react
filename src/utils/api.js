const baseUrl = "http://localhost:3001";

const checkServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

const request = (url, options) => {
  return fetch(url, options).then(checkServerResponse);
};

const getItemList = () => {
  const getItems = request(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return getItems;
};

const addItem = (values, token) => {
  const { name, imageUrl, weather, user } = values;
  const loadItem = request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
      user,
    }),
  });
  return loadItem;
};

const removeItem = (card, token) => {
  const { _id: id } = card;
  const deleteItem = request(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  return deleteItem;
};

const addLike = (id, user, token) => {
  const like = request(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ user }),
  });
  return like;
};

const removeLike = (id, user, token) => {
  const unlike = request(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ user }),
  });
  return unlike;
};

const api = {
  checkServerResponse,
  request,
  getItemList,
  addItem,
  removeItem,
  addLike,
  removeLike,
};

export default api;
