import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './features/usersSlice';
import productsReducer from './features/productsSlice';

const store = configureStore({
    reducer: {
        users: usersReducer,
        products: productsReducer, 
    },
});

export default store;

