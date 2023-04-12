import React, { useEffect, useState } from 'react';

import styles from './Home.module.css';
import { Banner } from 'components/Banner';
import { Title } from 'components/Title';
import { Card } from 'components/Card';

export const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      'https://my-json-server.typicode.com/gabrielrodrigues-pd/db-json/videos',
    )
      .then(response => response.json())
      .then(dados => {
        setVideos(dados);
      });
  }, []);
  return (
    <>
      <Banner imagem="Home" />
      <Title>
        <h1>Um Lugar para guardar seus vídeos e filmes!</h1>
      </Title>
      <section className={styles.container}>
        {videos.map(video => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
    </>
  );
};
