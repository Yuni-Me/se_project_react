// const baseUrl = "http://localhost:3001";
const baseUrl = "https://my-json-server.typicode.com/Yuni-Me/se_project_react";

const checkServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

const getItemList = () => {
  const getItems = fetch(`${baseUrl}/items/`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkServerResponse);
  return getItems;
};

const addItem = ({ name, imageUrl, weather }) => {
  const loadItem = fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then(checkServerResponse);
  return loadItem;
};

const removeItem = (id) => {
  const deleteItem = fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkServerResponse);
  return deleteItem;
};

const api = {
  getItemList,
  addItem,
  removeItem,
};

export default api;
