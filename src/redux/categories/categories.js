const CHECK_STATUS = 'CHECK_STATUS';

const initialState = {
  list: [],
};

const categoriesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHECK_STATUS:
      return {
        ...state,
        list: [...state.list, 'Under construction'],
      };

    default:
      return state;
  }
};

export const checkStatus = () => ({ type: CHECK_STATUS });

export default categoriesReducer;
