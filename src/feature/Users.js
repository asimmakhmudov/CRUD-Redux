import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../FakeDate"

export const userSlice = createSlice({
    name: 'users',
    initialState: { value: UsersData },
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload);
        },
        deleteUser: (state, action) => {
            state.value = state.value.filter(user => user.id !== action.payload);
        },
        updateUsername: (state, action) => {
            state.value = state.value.map(user => {
                if (user.id === action.payload.id) {
                    user.username = action.payload.username;
                }
                return user;
            });
        }
    }
})

export const { addUser, deleteUser, updateUsername } = userSlice.actions;
export default userSlice.reducer;