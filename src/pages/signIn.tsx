import Head from 'next/head'
import Link from 'next/link'
import styles from './signIn.module.scss'
import { InputText } from '../components/InputText'
import GoogleLogin from 'react-google-login'
import { useName } from '../hooks/useName'
import { useUser } from '../hooks/useUser'
import { usePassword } from '../hooks/usePassword'
import { useValidateInputs } from '../hooks/useValidateInputs'
import { useLoginWithGoogle } from '../hooks/useLoginWithGoogle'

export default function SignIn() {
  const { name, nameMessageError, setName, nameIsValid } = useName()
  const { user, setUser, userIsValid, userMessageError } = useUser()
  const {
    password,
    setPassword,
    passwordIsValid,
    passwordMessageError
  } = usePassword()
  const { onClickSignIn } = useValidateInputs(
    nameIsValid(),
    userIsValid(),
    passwordIsValid()
  )
  const { logIn } = useLoginWithGoogle()

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
            onClick={() => onClickSignIn(name, user, password)}
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
              onSuccess={logIn}
              onFailure={logIn}
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
