//state,reducer,actionCreaterを作成

import { createSlice } from "@reduxjs/toolkit";
import { PostsData } from "../DummyData";

export const postSlice = createSlice({
  name: "posts",
  initialState: { value: PostsData }, // 初期state
  //postするための仕組み
  reducers: {
    addPost: (state, action) => {
      // addPostがactionCreaterになる
      state.value.push(action.payload); // 配列にpushする
    },
    deletePost: (state, action) => {
      state.value = state.value.filter((post) => post.id !== action.payload.id);
    },
  },
});

export const { addPost, deletePost } = postSlice.actions;

export default postSlice.reducer;
