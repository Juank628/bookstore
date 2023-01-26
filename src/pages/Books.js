import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import booksReducer, { readBooks } from '../redux/books/books';
import Book from '../components/Book';
import AddForm from '../components/AddForm';
import styles from './Books.module.css';

export default function Books() {
  const dispatch = useDispatch();
  const { list } = useSelector((store) => store.books);

  useEffect(() => {
    dispatch(booksReducer(readBooks()));
  }, [dispatch]);

  return (
    <div className={styles.mainContainer}>
      {list.length ? (
        <>
          <ul className={styles.listContainer}>
            {list.map((book) => (
              <Book key={book.item_id} data={book} />
            ))}
          </ul>
        </>
      ) : (
        <h2 className={styles.emptyMessage}>The list is empty, please add a book</h2>
      )}
      <AddForm />
    </div>
  );
}
