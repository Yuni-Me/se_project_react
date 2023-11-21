const baseUrl = "http://localhost:3001";

const checkServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

const getItemList = () => {
  const getItems = fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkServerResponse);
  return getItems;
};

const addItem = (values, token) => {
  const { name, imageUrl, weather, user } = values;
  const loadItem = fetch(`${baseUrl}/items`, {
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
  }).then(checkServerResponse);
  return loadItem;
};

const removeItem = (card, token) => {
  const { _id: id } = card;
  const deleteItem = fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkServerResponse);
  return deleteItem;
};

const addLike = (id, user, token) => {
  const like = fetch(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ user }),
  }).then(checkServerResponse);
  return like;
};

const removeLike = (id, user, token) => {
  const unlike = fetch(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ user }),
  }).then(checkServerResponse);
  return unlike;
};

const api = {
  checkServerResponse,
  getItemList,
  addItem,
  removeItem,
  addLike,
  removeLike,
};

export default api;
