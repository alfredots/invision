import Head from 'next/head'

import styles from './home.module.scss'

export default function Home() {
  return (
    <div className={styles.homepage}>
      <Head>
        <title>Alfredo Tito</title>
      </Head>
      <section className={styles.latestEpisodes}>
        <h2>Alfredots</h2>
      </section>
    </div>
  )
}
