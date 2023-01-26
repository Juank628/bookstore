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
        <p>{category}</p>
        <p>{title}</p>
        <p>{author}</p>
        <ul className={styles.linksContainer}>
          <li>
            <Link to="/#">Comments</Link>
          </li>
          <li>
            <Link to="/#" onClick={(e) => deleteBook(e, item_id)}>
              Remove
            </Link>
          </li>
          <li>
            <Link to="/#">Edit</Link>
          </li>
        </ul>
      </div>
      <div className={styles.progressContainer}>
        <div className={styles.progressCircle} />
        <div>
          <p>64%</p>
          <p>Completed</p>
        </div>
      </div>
      <div>
        <p>CURRENT CHAPTER</p>
        <p>Chapter 17</p>
        <button type="button">UPDATE PROGRESS</button>
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
