import React from 'react';
import styles from './AddForm.module.css';

export default function AddForm() {
  return (
    <section>
      <h2>ADD NEW BOOK</h2>
      <form className={styles.formContainer}>
        <input className={styles.textInput} type="text" />
        <select className={styles.selectInput} name="" id="">
          <option value="">Category 1</option>
        </select>
        <button type="button">ADD BOOK</button>
      </form>
    </section>
  );
}
