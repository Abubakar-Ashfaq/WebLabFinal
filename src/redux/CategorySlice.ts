import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
    Category: String;
}

const initialState: string = "under construction";

const categorySlice = createSlice({
    name: "Books",
    initialState,
    reducers: {
        checkStatus: () => {
            return initialState;
        },
    }
});

export const { checkStatus } = categorySlice.actions;

export default categorySlice.reducer;