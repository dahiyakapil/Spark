import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import profileReducer from "../features/profile/ProfileSlice";
import linksReducer from "../features/links/linksSlice"
import shopReducer from "../features/shop/shopSlice"
export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    links: linksReducer,
    shop: shopReducer
  },
});