import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "0", name: "Tiina Tauriainen" },
    { id: "1", name: "Matti Meikäläinen" },
    { id: "2", name: "Arto Hellas" }
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;