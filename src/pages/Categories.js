import React from 'react';
import styles from './Categories.module.css';

export default function Categories() {
  return (
    <div className={styles.container}>
      <button type="button" className={styles.checkButton}>Check status</button>
    </div>
  );
}
