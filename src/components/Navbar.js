import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../img/user_icon.png';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <h1 className={styles.title}>Bookstore CMS</h1>
        <nav>
          <ul className={styles.linksList}>
            <li>
              <Link className={styles.link} to="/">BOOKS</Link>
            </li>
            <li>
              <Link className={styles.link} to="/categories">CATEGORIES</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.rightContainer}>
        <img className={styles.userIcon} src={userIcon} alt="user settings" />
      </div>
    </header>
  );
}
