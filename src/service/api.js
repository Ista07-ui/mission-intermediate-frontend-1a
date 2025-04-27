const BASE_URL = import.meta.env.VITE_API_URL;

export async function getProduct(titleQuery = "") {
  const res = await fetch(
    `${BASE_URL}/products${titleQuery ? `?title=${titleQuery}` : ""}`
  );
  return res.json();
}

export async function addProduct(data) {
  const res = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateProduct(id, data) {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteProduct(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    method: "DELETE",
  });
  return res.json();
}

export async function getUser(titleQuery = "") {
  const res = await fetch(
    `${BASE_URL}/users${titleQuery ? `?title=${titleQuery}` : ""}`
  );
  return res.json();
}

export async function addUser(data) {
  const res = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateUser(id, data) {
  const res = await fetch(`${BASE_URL}/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteUser(id) {
  const res = await fetch(`${BASE_URL}/users/${id}`, {
    method: "DELETE",
  });
  return res.json();
}
