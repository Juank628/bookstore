import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import booksReducer, { removeBook } from '../redux/books/books';
import styles from './Book.module.css';

const Book = ({ data }) => {
  const {
    id, category, title, author,
  } = data;
  const dispatch = useDispatch();

  const deleteBook = (id) => {
    dispatch(booksReducer(removeBook(id)));
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
            <Link to="/#" onClick={() => deleteBook(id)}>
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
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
