import React from 'react';

import styles from './Favoritos.module.css';
import { Banner } from 'components/Banner';
import { Title } from 'components/Title';
import { Card } from 'components/Card';
import { useFavoritoContext } from 'context/Favoritos';

export const Favoritos = () => {
  const { favorito } = useFavoritoContext();

  return (
    <section className={styles.container}>
      <Banner imagem="Favoritos" />
      <Title>
        <h1>Meus Favoritos</h1>
      </Title>
      <section className={styles.container}>
        {favorito.map(fav => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </section>
  );
};
