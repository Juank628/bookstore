import React from 'react';
import { useDispatch } from 'react-redux';
import categoriesReducer, { checkStatus } from '../redux/categories/categories';
import styles from './Categories.module.css';

export default function Categories() {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(categoriesReducer(checkStatus()));
  };

  return (
    <div className={styles.container}>
      <button type="button" className={styles.checkButton} onClick={clickHandler}>Check status</button>
    </div>
  );
}
