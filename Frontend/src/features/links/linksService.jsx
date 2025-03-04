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

const getLinks = async () => {
  try {
    const response = await axios.get(`${base_url}links`, config());
    return response.data;
  } catch (error) {
    console.error("Error fetching links:", error);
    throw error.response?.data?.message || error.message;
  }
};

const createLink = async (linkData) => {
  try {
    const response = await axios.post(`${base_url}links/create`, linkData, config());
    return response.data;
  } catch (error) {
    console.error("Error creating link:", error);
    throw error.response?.data?.message || error.message;
  }
};

const deleteLink = async (linkId) => {
  try {
    const response = await axios.delete(`${base_url}links/${linkId}`, config());
    return response.data;
  } catch (error) {
    console.error("Error deleting link:", error);
    throw error.response?.data?.message || error.message;
  }
};

const linksService = { getLinks, createLink, deleteLink };


export default linksService;
