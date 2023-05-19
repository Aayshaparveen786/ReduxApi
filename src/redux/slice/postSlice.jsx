import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Action
export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
    // isLoading: false,
    // data: null,
    // isError: false,
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchTodos.pending, (state, action) => {
  //     state.isLoading = true;
  //   });
  //   builder.addCase(fetchTodos.fulfilled, (state, action) => {
  //     state.isLoading = false;
  //     state.data = action.payload;
  //   });
  //   builder.addCase(fetchTodos.rejected, (state, action) => {
  //     console.log("Error", action.payload);
  //     state.isError = true;
  //   });
  // },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default postSlice.reducer;
