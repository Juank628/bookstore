import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import categoriesReducer, { checkStatus } from '../redux/categories/categories';
import styles from './Categories.module.css';

export default function Categories() {
  const dispatch = useDispatch();
  const { list } = useSelector((store) => store.categories);

  const clickHandler = () => {
    dispatch(categoriesReducer(checkStatus()));
  };

  return (
    <div className={styles.container}>
      <ul>
        {list.map((item) => (
          <li key={item}>{ item }</li>
        ))}
      </ul>
      <button type="button" className={styles.checkButton} onClick={clickHandler}>Check status</button>
    </div>
  );
}
