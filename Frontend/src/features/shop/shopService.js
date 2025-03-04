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

const getShopLinks = async () => {
  try {
    const response = await axios.get(`${base_url}shop`, config());
    return response.data;
  } catch (error) {
    console.error("Error fetching links:", error);
    throw error.response?.data?.message || error.message;
  }
};

const createShopLink = async (linkData) => {
  try {
    const response = await axios.post(`${base_url}shop/createShop`, linkData, config());
    return response.data;
  } catch (error) {
    console.error("Error creating link:", error);
    throw error.response?.data?.message || error.message;
  }
};

const deleteShopLink = async (linkId) => {
  try {
    const response = await axios.delete(`${base_url}shop/${linkId}`, config());
    return response.data;
  } catch (error) {
    console.error("Error deleting link:", error);
    throw error.response?.data?.message || error.message;
  }
};

const shopService = { getShopLinks, createShopLink, deleteShopLink };


export default shopService;
