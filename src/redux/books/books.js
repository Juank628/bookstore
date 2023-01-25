const ADD_BOOK = 'books/ADD_BOOK';
const REMOVE_BOOK = 'books/REMOVE_BOOK';

const initialState = {
  list: [
    {
      id: '1',
      title: 'The Treasure Island',
      author: 'Robert Louis Stevenson',
      category: 'Adventure',
    },
    {
      id: '2',
      title: 'The Dorian Gray Picture',
      author: 'Oscar Wilde',
      category: 'Drama',
    },
    {
      id: '3',
      title: 'Tom Sawyer',
      author: 'Mark Twain',
      category: 'Adventure',
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

    case REMOVE_BOOK:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.id),
      };

    default:
      return state;
  }
};

export const addBook = (book) => ({ type: ADD_BOOK, book });
export const removeBook = (id) => ({ type: REMOVE_BOOK, id });

export default booksReducer;
