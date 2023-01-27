import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import booksReducer, { removeBook } from '../redux/books/books';
import styles from './Book.module.css';

/* eslint camelcase: 0 */
const Book = ({ data }) => {
  const {
    item_id, category, title, author,
  } = data;
  const dispatch = useDispatch();

  const deleteBook = (e, item_id) => {
    e.preventDefault();
    dispatch(booksReducer(removeBook(item_id)));
  };

  return (
    <li className={styles.mainContainer}>
      <div>
        <p className={styles.category}>{category}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.author}>{author}</p>
        <ul className={styles.linksContainer}>
          <li>
            <Link className={styles.link} to="/#">Comments</Link>
          </li>
          <li>
            <Link className={`${styles.link} ${styles.middleLink}`} to="/#" onClick={(e) => deleteBook(e, item_id)}>
              Remove
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/#">Edit</Link>
          </li>
        </ul>
      </div>
      <div className={styles.progressContainer}>
        <div className={styles.progressCircle} />
        <div>
          <p className={styles.progressNumber}>64%</p>
          <p className={styles.progressStatus}>Completed</p>
        </div>
      </div>
      <div className={styles.chapterContainer}>
        <p className={styles.currentChapter}>CURRENT CHAPTER</p>
        <p className={styles.chapter}>Chapter 17</p>
        <button className={styles.updateButton} type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  data: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
