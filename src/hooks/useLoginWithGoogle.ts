import { useSavedUser } from '../contexts/ContextUser'
import { useRouter } from 'next/router'

export const useLoginWithGoogle = () => {
  const router = useRouter()
  const { saveUser } = useSavedUser()

  const logIn = (response) => {
    saveUser({
      name:
        response.profileObj.givenName + ' ' + response.profileObj.familyName,
      username: response.profileObj.email,
      password: null
    })
    router.push('/logged')
  }

  return {
    logIn
  }
}
