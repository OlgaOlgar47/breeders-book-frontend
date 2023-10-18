export const BASE_URL = "http://localhost:8080";

const getResponseData = (res) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();

};

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/users`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then((res) => {
    return getResponseData(res);
  });
};

export const getUserData = (userId, token) => {
  return fetch(`${BASE_URL}/users/${userId}`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return getResponseData(res);
    })
    .then((data) => data);
};
