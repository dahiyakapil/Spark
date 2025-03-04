import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import shopService from "./shopService";

// Async action to fetch links
export const fetchShopLinks = createAsyncThunk("links/fetchLinks", async (_, thunkAPI) => {
  try {
    return await shopService.getLinks();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || "Something went wrong");
  }
});

// Async action to create a new link
export const createShopLink = createAsyncThunk("links/createLink", async (linkData, thunkAPI) => {
  try {
    return await shopService.createLink(linkData);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || "Something went wrong");
  }
});

// Async action to delete a link
export const deleteShopLink = createAsyncThunk("links/deleteLink", async (linkId, thunkAPI) => {
  try {
    return await shopService.deleteLink(linkId);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || "Something went wrong");
  }
});

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    shopLinks: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShopLinks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      // .addCase(fetchLinks.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.links = action.payload;
      // })

      .addCase(fetchShopLinks.fulfilled, (state, action) => {
        state.links = action.payload.map(link => ({
          id: link._id, // Map _id to id
          title: link.title,
          url: link.url,
          platform: link.platform
        }));
        state.isLoading = false;
      })
      .addCase(fetchShopLinks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createShopLink.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createShopLink.fulfilled, (state, action) => {
        state.isLoading = false;
        state.links.push(action.payload);
      })
      .addCase(createShopLink.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteShopLink.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteShopLink.fulfilled, (state, action) => {
        state.isLoading = false;
        state.links = state.links.filter((link) => link.id !== action.payload.id);
      })
      .addCase(deleteShopLink.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default shopSlice.reducer;
