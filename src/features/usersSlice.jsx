import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' },
    ],
    loggedUser: null,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        login: (state, action) => {
            const { username, password } = action.payload;
            const user = state.users.find(
                (user) => user.username === username && user.password === password
            );
            if (user) {
                state.loggedUser = username;
            }
        },
        logout: (state) => {
            state.loggedUser = null;
        },
    },
});

export const { login, logout } = usersSlice.actions;

export default usersSlice.reducer;
