import React from 'react';

import styles from './Title.module.css';

export const Title = ({ children }) => {
  return <div className={styles.texto}>{children}</div>;
};
