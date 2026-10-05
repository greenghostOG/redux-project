import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/v1/user";

export const fetchUsersApi = async () => {
  const response = await axios.get(`${API_BASE_URL}/users`);
  return response.data.users;
};

export const addUserApi = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/register`, userData);
  return response.data;
};

export const deleteUserApi = async (userId) => {
  const response = await axios.delete(`${API_BASE_URL}/users/${userId}`);
  return response.data;
};