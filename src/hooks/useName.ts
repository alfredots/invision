import { useState } from 'react'

type useNameProps = {
  name: string
  setName: (string) => void
  nameMessageError: string
  nameIsValid: () => boolean
}

export const useName = (): useNameProps => {
  const [name, setName] = useState('')
  const [nameMessageError, setNameMessageError] = useState('')

  const nameIsValid = () => {
    if (name.length === 0) {
      setNameMessageError('Este campo não pode ser vazio')
      return false
    } else {
      setNameMessageError('')
      return true
    }
  }

  return {
    name,
    setName,
    nameMessageError,
    nameIsValid
  }
}
