// authApi.js
import axios from 'axios';

const BASE_URL = 'http://localhost:4000/api/auth'; // Replace with your API base URL

export const login = async ({username,password}) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      username,
      password
    });
    return response.data;
  } catch (error) {
    throw error.response.data; // Handle authentication errors
  }
};


export const signup = async ({username, email, password}) => {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, {
      username,
      email,
      password
    });
    console.log(response)
    return response.data;
  } catch (error) {
    throw error.response.data; // Handle signup errors
  }
};


export const logout = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/logout`);
    return response.data;
  } catch (error) {
    throw error.response.data; // Handle logout errors
  }
};

// Other authentication API functions can be added here
