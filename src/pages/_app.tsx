import '../styles/global.scss'
import styles from '../styles/app.module.scss'
import { Slider } from '../components/Slider'
import { UserContextProvider } from '../contexts/ContextUser'

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <div className={styles.wrapper}>
        <main className={styles.mainContainer}>
          <div className={styles.slider}>
            <Slider />
          </div>
          <div className={styles.signInContainer}>
            <Component {...pageProps} />
          </div>
        </main>
      </div>
    </UserContextProvider>
  )
}

export default MyApp
