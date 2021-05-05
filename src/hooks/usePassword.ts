import { useState } from 'react'
import { useSavedUser } from '../contexts/ContextUser'

type usePasswordProps = {
  password: string
  setPassword: (string) => void
  passwordMessageError: string
  passwordIsValid: () => boolean
}

export const usePassword = (): usePasswordProps => {
  const { savedUser } = useSavedUser()
  const [password, setPassword] = useState('')
  const [passwordMessageError, setPasswordMessageError] = useState('')

  const passwordIsValid = () => {
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

  return {
    password,
    setPassword,
    passwordIsValid,
    passwordMessageError
  }
}
