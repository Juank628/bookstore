const ADD_BOOK = 'books/ADD_BOOK';

const initialState = {
  list: [
    {
      id: 1,
      title: 'book 1',
      author: 'auth 1',
      category: 'cat 1',
    },
    {
      id: 2,
      title: 'book 2',
      author: 'auth 2',
      category: 'cat 2',
    },
    {
      id: 3,
      title: 'book 3',
      author: 'auth 3',
      category: 'cat 3',
    },
  ],
};

const booksReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        list: [...state.list, action.book],
      };

    default:
      return state;
  }
};

export const addBook = (book) => ({ type: ADD_BOOK, book });

export default booksReducer;
