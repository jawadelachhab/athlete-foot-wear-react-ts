import { createSlice } from "@reduxjs/toolkit";
import actGetPosts from "./act/actGetPosts";
import { TLoading , TPost,isString } from "@types";


interface IPostsState {
  records: TPost[];
  loading: TLoading;
  error: string | null;
}

const initialState: IPostsState = {
  records: [],
  loading: "idle",
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postsRecordsCleanUp: (state) => {
      state.records = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(actGetPosts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetPosts.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetPosts.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload) ) {
        state.error = action.payload;
      }
    });
  },
});

export { actGetPosts };
export const { postsRecordsCleanUp } = postsSlice.actions;
export default postsSlice.reducer;