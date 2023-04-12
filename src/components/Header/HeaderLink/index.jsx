import React from 'react';

import styles from './Link.module.css';
import { Link } from 'react-router-dom';

export const HeaderLink = ({ url, children }) => {
  return (
    <Link to={url} className={styles.link}>
      {children}
    </Link>
  );
};
