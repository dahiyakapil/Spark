import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import linksService from "./linksService";

// Async action to fetch links
export const fetchLinks = createAsyncThunk("links/fetchLinks", async (_, thunkAPI) => {
  try {
    return await linksService.getLinks();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || "Something went wrong");
  }
});

// Async action to create a new link
export const createLink = createAsyncThunk("links/createLink", async (linkData, thunkAPI) => {
  try {
    return await linksService.createLink(linkData);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || "Something went wrong");
  }
});

// Async action to delete a link
export const deleteLink = createAsyncThunk("links/deleteLink", async (linkId, thunkAPI) => {
  try {
    return await linksService.deleteLink(linkId);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || "Something went wrong");
  }
});

const linksSlice = createSlice({
  name: "links",
  initialState: {
    links: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLinks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      // .addCase(fetchLinks.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.links = action.payload;
      // })

      .addCase(fetchLinks.fulfilled, (state, action) => {
        state.links = action.payload.map(link => ({
          id: link._id, // Map _id to id
          title: link.title,
          url: link.url,
          platform: link.platform
        }));
        state.isLoading = false;
      })
      .addCase(fetchLinks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createLink.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createLink.fulfilled, (state, action) => {
        state.isLoading = false;
        state.links.push(action.payload);
      })
      .addCase(createLink.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteLink.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteLink.fulfilled, (state, action) => {
        state.isLoading = false;
        state.links = state.links.filter((link) => link.id !== action.payload.id);
      })
      .addCase(deleteLink.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default linksSlice.reducer;
