import Head from 'next/head'
import Link from 'next/link'
import styles from './signIn.module.scss'
import { InputText } from '../components/InputText'
import { useState } from 'react'
import GoogleLogin from 'react-google-login'
import { useSavedUser } from '../contexts/ContextUser'
import { useRouter } from 'next/router'

const responseGoogle = (response) => {
  console.log(response)
}

export default function SignIn() {
  const router = useRouter()
  const { saveUser } = useSavedUser()
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
    const emailIsValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (user.length === 0) {
      setUserMessageError('Este campo não pode ser vazio')
      return false
    } else if (!emailIsValid.test(String(user).toLowerCase())) {
      setUserMessageError('O e-mail está incorreto')
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
    const resultValidationName = validName()
    const resultValidationUser = validUser()
    const resultValidationPassword = validPassword()
    const allInputIsValid =
      resultValidationName && resultValidationUser && resultValidationPassword
    if (allInputIsValid) {
      saveUser({
        name: name,
        username: user,
        password: password
      })
      alert('usuário cadastrado com sucesso!')
      router.push('/')
    }
  }

  return (
    <div data-testid="sign-in" style={{ height: '100%' }}>
      <Head>
        <title>Sign In - Invision</title>
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
          <button
            data-testid="sign-in-button"
            className={styles.signInButton}
            onClick={validInputs}
          >
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
