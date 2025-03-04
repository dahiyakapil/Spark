import axios from "axios";
import { base_url } from "../../utils/base_url";

const getTokenFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user).token : null;
};

const config = () => ({
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    Accept: "application/json",
  },
});

const signup = async (user) => {
  const response = await axios.post(`${base_url}user/register`, user);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (user) => {
  try {
    const response = await axios.post(`${base_url}user/login`, user);
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error;
  }
};

const logout = async () => {
  localStorage.removeItem("user"); // ✅ Fix: Remove correct key
  try {
    const response = await axios.post(`${base_url}user/logout`, {}, config());
    return response.data;
  } catch (error) {
    console.error("Logout error:", error.response?.data || error.message);
  }
};

const updateUserService = async (userData) => {
  try {
    const response = await axios.put(`${base_url}user/update-user`, userData, config());
    
    // Merge updated fields with existing user data
    const updatedUser = {
      ...JSON.parse(localStorage.getItem("user")),
      ...response.data
    };
    
    localStorage.setItem("user", JSON.stringify(updatedUser));
    return updatedUser;
    
  } catch (error) {
    console.error("Update error:", error);
    throw error.response?.data?.message || error.message;
  }
};

const deleteUserService = async () => {
  try {
    const response = await axios.delete(`${base_url}user/delete-user`, config());
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error.response?.data?.message || error.message;
  }
};

const authService = {
  signup,
  login,
  logout,
  updateUserService,
  deleteUserService,
};

export default authService;
