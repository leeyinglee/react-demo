import GET_BOOKS from './actionTypes';

const getBooks = (list) => {
  return {
    type: GET_BOOKS,
    payload: {
      list,
    },
  };
};

export default getBooks;
