import {configureStore} from '@reduxjs/toolkit';

import bookReducer from "../redux/BookSlice.ts"
import categoryReducer from "../redux/CategorySlice.ts"

export const store = configureStore({
    reducer: {
        book: bookReducer,
        category: categoryReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
