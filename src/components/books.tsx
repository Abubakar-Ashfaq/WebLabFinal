// create a react page that displays a list of books has delete button and a form to add a book

import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/BookSlice.ts";
import { addBook , removeBook} from "../redux/BookSlice.ts"

const Books = () => {
    const books = useSelector((state: RootState) => state.book);
    const dispatch = useDispatch();

    const [bookName, setBookName] = useState('');
    const [bookTitle, setBookTitle] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [bookCategory, setBookCategory] = useState('');
    const [item_id, setItem_id] = useState(4);

    const handleAddBook = (event: React.FormEvent) => {
    event.preventDefault();
    setItem_id(item_id + 1);

    dispatch(addBook({ item_id,name: bookName, title: bookTitle, author: bookAuthor, category: bookCategory }));
    setBookName('');
    setBookTitle('');
    setBookAuthor('');
    setBookCategory('');
};

    return (
        <div>
            <h2>Books</h2>
            <div>
  {books.map((book, index) => (
    <div key={index}>
      <p>ID: {book.item_id}</p>
      <p>Title: {book.title}</p>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
    </div>
  ))}
</div>

            <form onSubmit={handleAddBook}>
                <input type="text" value={bookName} onChange={e => setBookName(e.target.value)} placeholder="Book name" />
                <input type="text" value={bookTitle} onChange={e => setBookTitle(e.target.value)} placeholder="Book Title"/>
                <input type="text" value={bookAuthor} onChange={e => setBookAuthor(e.target.value)} placeholder="Author"/>
                <input type="text" value={bookCategory} onChange={e => setBookCategory(e.target.value)} placeholder="Category"/>
                <button type="submit">Add book</button>
            </form>
            <button onClick={() => {
    dispatch(removeBook(item_id));
    setItem_id(item_id - 1);
}}>Remove book</button>
        </div>
    );
};



export default Books;
