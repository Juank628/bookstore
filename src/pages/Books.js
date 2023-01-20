import React from 'react';
import Book from '../components/Book';
import styles from './Books.module.css';

const booksList = [
  {
    id: 1,
    author: 'Juan',
    title: 'your code is great!',
    category: 'computer science',
  },
  {
    id: 2,
    author: 'Lara',
    title: 'History of Rome',
    category: 'History',
  },
  {
    id: 3,
    author: 'Pedro',
    title: 'Mounsters',
    category: 'Kids',
  },
];

export default function Books() {
  return (
    <div className={styles.mainContainer}>
      <ul className={styles.listContainer}>
        {booksList.map((book) => (
          <Book key={book.id} data={book} />
        ))}
      </ul>
    </div>
  );
}
