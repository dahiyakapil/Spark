import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import profileService from "./profileService";

// Async action to fetch profile
export const fetchProfile = createAsyncThunk("profile/fetchProfile", async (_, thunkAPI) => {
  try {
    return await profileService.getProfile();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});



// Async action to update profile
// profileSlice.js
export const updateProfile = createAsyncThunk("profile/updateProfile", async (profileData, thunkAPI) => {
  try {
    const response = await profileService.updateProfile(profileData);
    return response.user; // Return the user object from response
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default profileSlice.reducer;
