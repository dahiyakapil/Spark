import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const getUserFromLocalStorage = () => {
  return localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
};

// Signup Async thunk
export const signup = createAsyncThunk("auth/signup", async (user, thunkAPI) => {
  try {
    return await authService.signup(user);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
  }
});

// Login Async thunk
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
  }
});

// Logout Async thunk
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await authService.logout();
    localStorage.removeItem("user");
    return {};
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
  }
});

// Update User
export const updateUser = createAsyncThunk("user/updateUser", async (userData, thunkAPI) => {
  try {
    return await authService.updateUserService(userData);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
  }
});

// Delete User
export const deleteUser = createAsyncThunk("user/deleteUser", async (_, { rejectWithValue, dispatch }) => {
  try {
    const response = await authService.deleteUserService();
    localStorage.removeItem("user"); 
    dispatch(logout()); 
    return response;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || error.message);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: getUserFromLocalStorage(),
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
    deleteUser: {
      loading: false,
      success: false,
      error: null,
    },
  },
  reducers: {
    resetAuthState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = false;
        state.user = null;
      })

      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = { ...state.user, ...action.payload };
        localStorage.setItem("user", JSON.stringify(state.user));
      })

      .addCase(deleteUser.pending, (state) => {
        state.deleteUser.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state) => {
        state.deleteUser.loading = false;
        state.deleteUser.success = true;
        state.user = null;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.deleteUser.loading = false;
        state.deleteUser.error = action.payload;
      });
  },
});

export const { resetAuthState } = authSlice.actions;
export default authSlice.reducer;
