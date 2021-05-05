import { useState } from 'react'
import { useSavedUser } from '../contexts/ContextUser'
import { useRouter } from 'next/router'

type useValidateInputsReturn = {
  onClickSignIn: (user: string, password: string, name?: string) => void
  onClickSignUp: (user: string, password: string) => void
}

export const useValidateInputs = (
  userIsValid: boolean,
  passwordIsValid: boolean,
  nameIsValid?: boolean
): useValidateInputsReturn => {
  const router = useRouter()
  const { saveUser } = useSavedUser()

  const onClickSignIn = (name, user, password) => {
    if (nameIsValid && userIsValid && passwordIsValid) {
      saveUser({
        name: name,
        username: user,
        password: password
      })
      alert('usuário cadastrado com sucesso!')
      router.push('/')
    }
  }

  const onClickSignUp = (user, password) => {
    if (userIsValid && passwordIsValid) {
      router.push('/logged')
    }
  }

  return {
    onClickSignIn,
    onClickSignUp
  }
}
