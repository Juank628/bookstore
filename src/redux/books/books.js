const READ_BOOKS = 'books/READ_BOOKS';
const ADD_BOOK = 'books/ADD_BOOK';
const REMOVE_BOOK = 'books/REMOVE_BOOK';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/tW58yIlbdFQrl7QnDwtY/books/';

const initialState = {
  list: [],
};

const booksReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case READ_BOOKS:
      return {
        ...state,
        list: [...action.books],
      };

    case ADD_BOOK:
      return {
        ...state,
        list: [...state.list, action.book],
      };

    case REMOVE_BOOK:
      return {
        ...state,
        list: state.list.filter((item) => item.item_id !== action.id),
      };

    default:
      return state;
  }
};

export const readBooks = () => async (dispatch) => {
  const res = await fetch(baseURL);
  const data = await res.json();
  const booksArray = Object.entries(data);
  const books = booksArray.map((book) => ({
    item_id: book[0],
    title: book[1][0].title,
    author: book[1][0].author,
    category: book[1][0].category,
  }));
  dispatch({ type: READ_BOOKS, books });
};

export const addBook = (book) => async (dispatch) => {
  const res = await fetch(baseURL, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(book),
  });
  if (res.status >= 200 && res.status < 300) {
    dispatch({ type: ADD_BOOK, book });
  }
};

export const removeBook = (id) => async (dispatch) => {
  const res = await fetch(`${baseURL}${id}`, {
    method: 'DELETE',
  });
  if (res.status >= 200 && res.status < 300) {
    readBooks();
    dispatch({ type: REMOVE_BOOK, id });
  }
};

export default booksReducer;
