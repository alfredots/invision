import Head from 'next/head'
import Link from 'next/link'
import styles from './signIn.module.scss'
import { InputText } from '../components/InputText'
import { useState } from 'react'
import GoogleLogin from 'react-google-login'

const responseGoogle = (response) => {
  console.log(response)
}

export default function SignIn() {
  const [name, setName] = useState('')
  const [nameMessageError, setNameMessageError] = useState('')
  const [user, setUser] = useState('')
  const [userMessageError, setUserMessageError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordMessageError, setPasswordMessageError] = useState('')
  const [userIsValid, setUserIsValid] = useState(false)
  function validName() {
    if (name.length === 0) {
      setNameMessageError('Este campo não pode ser vazio')
      return false
    } else {
      setNameMessageError('')
      return true
    }
  }

  function validUser() {
    if (user.length === 0) {
      setUserMessageError('Este campo não pode ser vazio')
      return false
    } else {
      setUserMessageError('')
      return true
    }
  }

  function validPassword() {
    if (password.length <= 6) {
      if (password.length === 0) {
        setPasswordMessageError('Este campo não pode ser vazio')
      } else {
        setPasswordMessageError('A senha não pode ter menos de 6 caracteres')
      }
      return false
    } else {
      setPasswordMessageError('')
      return true
    }
  }

  function validInputs() {
    const allInputIsValid = validName() && validUser() && validPassword()
    console.log({ allInputIsValid })
  }

  return (
    <div style={{ height: '100%' }}>
      <Head>
        <title>Alfredo Tito</title>
      </Head>
      <section className={styles.signIn}>
        <h1>Invision</h1>
        <div className={styles.formContainer}>
          <h2>Getting Started</h2>
          <InputText
            title="Full Name"
            value={name}
            placeholder={'John Doe'}
            error={nameMessageError}
            setValue={setName}
          />
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
          <button className={styles.signInButton} onClick={validInputs}>
            Sign up
          </button>
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
          <span className={styles.terms}>
            By signing up, you agree to Invision{' '}
            <a href="#">Terms of Conditions</a> and{' '}
            <a href="#">Privacy Policy</a>
          </span>
          <span className={styles.terms}>
            Already on Invision? <Link href="/">Log in</Link>
          </span>
        </div>
      </section>
    </div>
  )
}
