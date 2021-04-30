import { createContext, ReactNode, useContext, useState } from 'react'

type UserContextProviderProps = {
  children: ReactNode
}

type User = {
  name: string
  username: string
  password: string
}

type UserContextData = {
  saveUser: (User) => void
  savedUser: User
}

export const UserContext = createContext({} as UserContextData)

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [savedUser, setSavedUser] = useState({
    name: '',
    username: '',
    password: ''
  } as User)

  function saveUser(user) {
    setSavedUser(user)
  }

  return (
    <UserContext.Provider value={{ savedUser, saveUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useSavedUser = () => {
  return useContext(UserContext)
}
