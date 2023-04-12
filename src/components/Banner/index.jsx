import React from 'react';
import styles from './Banner.module.css';

export const Banner = ({ imagem }) => {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url('/images/banner-${imagem}.png')` }}
    ></div>
  );
};
