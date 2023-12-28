import { createSlice , PayloadAction} from "@reduxjs/toolkit";

interface BookState {
    item_id: Number;
    title: String;
    author: String;
    category: String;
}

const initialState: BookState[]= [
    {
        "item_id": 1,
        "title": "The Great Gatsby",
        "author": "John Smith",
        "category": "Fiction",
    },
    {
        "item_id": 2,
        "title": "Anna Karenina",
        "author": "Leo Tolstoy",
        "category": "Fiction",
    },
    {
        "item_id": 3,
        "title": "The Selfish Gene",
        "author": "Richard Dawkins",
        "category": "NonFiction",
    },
    
];



const bookSlice = createSlice({
    name: "Books",
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<BookState>) => {
            state.push(action.payload);
        },
        removeBook: (state, action: PayloadAction<Number>) => {
            return state.filter(book => book.item_id !== action.payload);
        },
    }
});

export const {addBook, removeBook} = bookSlice.actions;

export default bookSlice.reducer;
