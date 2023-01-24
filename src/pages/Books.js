import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import AddForm from '../components/AddForm';
import styles from './Books.module.css';

export default function Books() {
  const { list } = useSelector((store) => store.books);

  return (
    <div className={styles.mainContainer}>
      {list.length ? (
        <>
          <ul className={styles.listContainer}>
            {list.map((book) => (
              <Book key={book.id} data={book} />
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
