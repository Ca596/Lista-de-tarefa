import React from 'react';
import Header from '../componentes/Header/Header';

import styles from './Home.module.scss';
import Lista from '../componentes/Lista/Lista';

function Home({ data }) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.content}>
        <h1>Otimize seu tempo e se organize com o nosso Planejador Diário</h1>

        <Lista data={data} />
      </main>
    </div>
  );
}

export default Home;