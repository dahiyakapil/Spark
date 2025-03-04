import axios from "axios";
import { base_url } from "../../utils/base_url";

const getTokenFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user).token : null;
};

console.log("Auth Token:", getTokenFromLocalStorage());


const config = () => {
  const token = getTokenFromLocalStorage();
  console.log("Config Headers - Auth Token:", token); // Debugging Line
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
};



const getProfile = async () => {
  try {
    const response = await axios.get(`${base_url}profile/getProfile`, config());
    return response.data;
  } catch (error) {
    console.error("Error fetching profile:", error);
    throw error.response?.data?.message || error.message;
  }
};

// Added updateProfile function
const updateProfile = async (profileData) => {
  try {
    console.log("📤 Sending profile update request:", JSON.stringify(profileData, null, 2));

    const response = await axios.put(`${base_url}profile/setprofile`, profileData, config());

    console.log("✅ Update successful:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Error updating profile:", error.response?.data || error.message);
    throw error.response?.data?.message || error.message;
  }
};




const profileService = { getProfile, updateProfile };

export default profileService;
