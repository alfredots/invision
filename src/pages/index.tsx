import Head from 'next/head'
import Link from 'next/link'
import styles from './home.module.scss'
import GoogleLogin from 'react-google-login'
import { InputText } from '../components/InputText'
import { useState } from 'react'

const responseGoogle = (response) => {
  console.log(response)
}

export default function Home() {
  const [user, setUser] = useState('')
  const [userMessageError, setUserMessageError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordMessageError, setPasswordMessageError] = useState('')

  return (
    <div style={{ height: '100%' }}>
      <Head>
        <title>Alfredo Tito</title>
      </Head>
      <section className={styles.signIn}>
        <h1>Invision</h1>
        <div className={styles.formContainer}>
          <h2>Welcome to Invision</h2>
          <InputText
            title="Users name or Email"
            value={user}
            placeholder={'example@gmail.com'}
            error={userMessageError}
            setValue={setUser}
          />
          <InputText
            title="Password"
            value={password}
            placeholder={'****'}
            type="password"
            error={passwordMessageError}
            setValue={setPassword}
          />
          <a href="#" className={styles.forgotPassword}>
            Forgot password?
          </a>
          <button className={styles.signInButton}>Sign in</button>
          <div className={styles.divider}>
            <p>Or</p>
          </div>
          <div className={styles.googleButtonContainer}>
            <GoogleLogin
              clientId="573428625274-mt242098he6plaljcu117938rn8kf61t.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </div>
          <span className={styles.createAccount}>
            New Invision? <Link href="/signIn">Create Account</Link>
          </span>
        </div>
      </section>
    </div>
  )
}
