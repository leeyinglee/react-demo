import GET_BOOKS from '../actionTypes';

const initialState = {
  books: [],
};

export default function books(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS: {
      const { list } = action.payload;
      return {
        ...state,
        books: [...list],
      };
    }
    default:
      return state;
  }
}
