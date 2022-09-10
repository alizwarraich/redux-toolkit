import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "1", title: "First Post!", content: "Good things" },
    { id: "2", title: "Second Post", content: "Bad things" }
];

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {}
});

export const selectAllPosts = state => state.posts;

export default postsSlice.reducer;