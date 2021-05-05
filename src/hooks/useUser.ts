import { useState } from 'react'
import { useSavedUser } from '../contexts/ContextUser'

type useUserProps = {
  user: string
  setUser: (string) => void
  userMessageError: string
  userIsValid: () => boolean
}

export const useUser = () => {
  const [user, setUser] = useState('')
  const [userMessageError, setUserMessageError] = useState('')
  const { savedUser } = useSavedUser()

  const userIsValid = () => {
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

  return {
    user,
    setUser,
    userIsValid,
    userMessageError
  }
}
