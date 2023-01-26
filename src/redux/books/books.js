import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/tW58yIlbdFQrl7QnDwtY/books/';

const initialState = {
  list: [],
  status: 'undefined',
};

export const readBooks = createAsyncThunk('books/READ_BOOKS', async () => {
  const res = await fetch(baseURL);
  const data = await res.json();
  const booksArray = Object.entries(data);
  const books = booksArray.map((book) => ({
    item_id: book[0],
    title: book[1][0].title,
    author: book[1][0].author,
    category: book[1][0].category,
  }));
  return books;
});

export const addBook = createAsyncThunk('books/ADD_BOOK', async (book) => {
  await fetch(baseURL, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(book),
  });
  return book;
});

export const removeBook = createAsyncThunk('books/REMOVE_BOOK', async (id) => {
  await fetch(`${baseURL}${id}`, {
    method: 'DELETE',
  });
  return id;
});

const booksReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case addBook.pending.type:
      return {
        ...state,
        status: 'pending',
      };

    case addBook.fulfilled.type:
      return {
        ...state,
        list: [...state.list, action.payload],
        status: 'fulfilled',
      };

    case addBook.rejected.type:
      return {
        ...state,
        status: 'rejected',
      };

    case readBooks.pending.type:
      return {
        ...state,
        status: 'pending',
      };

    case readBooks.fulfilled.type:
      return {
        ...state,
        list: [...action.payload],
        status: 'fulfilled',
      };

    case readBooks.rejected.type:
      return {
        ...state,
        status: 'rejected',
      };

    case removeBook.pending.type:
      return {
        ...state,
        status: 'pending',
      };

    case removeBook.fulfilled.type:
      return {
        ...state,
        list: state.list.filter((item) => item.item_id !== action.payload),
        status: 'fulfilled',
      };

    case removeBook.rejected.type:
      return {
        ...state,
        status: 'rejected',
      };

    default:
      return state;
  }
};

export default booksReducer;
