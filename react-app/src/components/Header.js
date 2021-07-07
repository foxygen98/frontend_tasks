import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Header.module.css';

function Header({ activePath }) {
  return (
    <div className={styles.HeaderContainer}>
      <Tab currentPath='/users' text='Users' activePath={activePath} />
      <Tab currentPath='/products' text='Products' activePath={activePath} />
    </div>
  );
}

function Tab({ currentPath, text }) {
  return (
    <NavLink className={styles.Link} activeClassName={styles.ActiveButton} to={currentPath}>
      {text}
    </NavLink>
  );
}

export default Header;
