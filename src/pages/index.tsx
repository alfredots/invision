import Head from 'next/head'
import Link from 'next/link'
import styles from './home.module.scss'
import GoogleLogin from 'react-google-login'
import { InputText } from '../components/InputText'
import { useState } from 'react'
import { useSavedUser } from '../contexts/ContextUser'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const { savedUser, saveUser } = useSavedUser()
  const [user, setUser] = useState('')
  const [userMessageError, setUserMessageError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordMessageError, setPasswordMessageError] = useState('')

  function logIn() {
    const validUserResult = validUser()
    const validPasswordResult = validPassword()
    if (validUserResult && validPasswordResult) {
      router.push('/logged')
    }
  }

  function responseGoogle(response) {
    saveUser({
      name: response.ft.Te,
      username: response.ft.Qt,
      password: null
    })
    router.push('/logged')
  }

  function validUser() {
    const emailIsValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (user.length === 0) {
      setUserMessageError('Este campo não pode ser vazio')
      return false
    } else if (!emailIsValid.test(String(user).toLowerCase())) {
      setUserMessageError('O e-mail está incorreto')
      return false
    } else if (savedUser.username.localeCompare(user) !== 0) {
      setUserMessageError('Este usuário não é válido')
    } else {
      setUserMessageError('')
      return true
    }
  }

  function validPassword() {
    console.log({ passwordMessageError })
    if (password.length <= 6) {
      if (password.length === 0) {
        setPasswordMessageError('Este campo não pode ser vazio')
      } else {
        setPasswordMessageError('A senha não pode ter menos de 6 caracteres')
      }
      return false
    } else if (savedUser.password.localeCompare(password) !== 0) {
      setPasswordMessageError('A senha está incorreta')
    } else {
      setPasswordMessageError('')
      return true
    }
  }

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
          <button className={styles.signInButton} onClick={logIn}>
            Sign in
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
          <span className={styles.createAccount}>
            New Invision? <Link href="/signIn">Create Account</Link>
          </span>
        </div>
      </section>
    </div>
  )
}
