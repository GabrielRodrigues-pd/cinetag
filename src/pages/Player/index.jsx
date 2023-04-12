import { Banner } from 'components/Banner';
import { Title } from 'components/Title';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Player.module.css';
import { NotEncontrada } from 'pages/NaoEncontrada';

export const Player = () => {
  const [video, setVideos] = useState([]);

  const params = useParams();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/gabrielrodrigues-pd/db-json/videos?id=${params.id}`,
    )
      .then(response => response.json())
      .then(dados => setVideos(...dados));
  }, [params]);

  if (!video) {
    return <NotEncontrada />;
  }

  return (
    <>
      <Banner imagem="Player" />
      <Title>
        <h1>Player</h1>
      </Title>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
};
