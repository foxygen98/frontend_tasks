import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

function Header({ activePath }) {
  return (
    <div className={styles.HeaderContainer}>
      <Button currentPath='/users' text='Users' activePath={activePath} />
      <Button currentPath='/products' text='Products' activePath={activePath} />
    </div>
  );
}

function Button({ currentPath, text, activePath }) {
  let style = `${styles.Link}`;
  
  if (currentPath === activePath) {
    style = `${styles.Link} ${styles.ActiveButton}`;
  }

  return (
    <Link className={style} to={currentPath}>{text}</Link>
  );
}

export default Header;
