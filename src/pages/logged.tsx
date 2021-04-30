import Head from 'next/head'
import Link from 'next/link'
import styles from './signIn.module.scss'
import { InputText } from '../components/InputText'
import { useState } from 'react'
import GoogleLogin from 'react-google-login'
import { useSavedUser } from '../contexts/ContextUser'
import { useRouter } from 'next/router'
import { router } from 'next/client'

const responseGoogle = (response) => {
  console.log(response)
}

export default function SignIn() {
  const { savedUser } = useSavedUser()

  return (
    <div style={{ height: '100%' }}>
      <Head>
        <title>Alfredo Tito</title>
      </Head>
      <section className={styles.signIn}>
        <h1>Invision</h1>
        <div className={styles.formContainer}>
          <h2>Welcome {savedUser.name}</h2>
          <p>username or email: {savedUser.username}</p>
        </div>
      </section>
    </div>
  )
}
