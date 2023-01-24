import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import booksReducer, { addBook } from '../redux/books/books';
import styles from './AddForm.module.css';

export default function AddForm() {
  const dispatch = useDispatch();
  const [bookData, setBookData] = useState({
    title: 'default',
    author: 'The best author',
    category: 'Action',
  });

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      booksReducer(
        addBook({
          ...bookData,
          id: uuidv4(),
        }),
      ),
    );
  };

  const changeHandler = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section>
      <h2>ADD NEW BOOK</h2>
      <form className={styles.formContainer} onSubmit={submitHandler}>
        <input
          placeholder="Book title"
          className={styles.textInput}
          type="text"
          name="title"
          onChange={changeHandler}
        />
        <select className={styles.selectInput} name="category" onChange={changeHandler}>
          <option value="Action">Action</option>
          <option value="Romance">Romance</option>
        </select>
        <button className={styles.addButton} type="submit">
          ADD BOOK
        </button>
      </form>
    </section>
  );
}
