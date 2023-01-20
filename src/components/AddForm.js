import React from 'react';
import styles from './AddForm.module.css';

export default function AddForm() {
  return (
    <section>
      <h2>ADD NEW BOOK</h2>
      <form className={styles.formContainer}>
        <input placeholder="Book title" className={styles.textInput} type="text" />
        <select className={styles.selectInput} name="" id="">
          <option value="">Action</option>
        </select>
        <button className={styles.addButton} type="button">ADD BOOK</button>
      </form>
    </section>
  );
}
