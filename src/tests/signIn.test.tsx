import {
  render,
  waitFor,
  screen,
  fireEvent,
  getAllByTestId
} from '@testing-library/react'
import SignIn from '../pages/signIn'
import { UserContextProvider } from '../contexts/ContextUser'

describe('<Home />', () => {
  it('testar se campo nome mostra erro quando nulo', async () => {
    const { getByTestId, getAllByText } = render(<SignIn />)
    const buttonNode = await waitFor(() => getByTestId('sign-in-button'))
    fireEvent.click(buttonNode)
    expect(getAllByText('Este campo não pode ser vazio')).toHaveLength(3)
  })

  it('mostrar validacao de email ao faltar @', async () => {
    const { getByTestId, getByPlaceholderText, getByText } = render(<SignIn />)
    const buttonNode = await waitFor(() => getByTestId('sign-in-button'))
    // const inputNameNode = await waitFor(() => getByPlaceholderText('John Doe'))
    const inputEmailNode = await waitFor(() =>
      getByPlaceholderText('example@gmail.com')
    )
    // fireEvent.change(inputNameNode, { target: { value: 'alfredo tito' } })
    fireEvent.change(inputEmailNode, { target: { value: 'emailteste' } })
    fireEvent.click(buttonNode)
    expect(getByText('O e-mail está incorreto')).toBeInTheDocument()
  })

  it('deve nao mostrar erros se campos preenchidos corretamente', async () => {
    const { getByTestId, getByPlaceholderText, container } = render(
      <UserContextProvider>
        <SignIn />
      </UserContextProvider>
    )
    const buttonNode = await waitFor(() => getByTestId('sign-in-button'))
    const inputNameNode = await waitFor(() => getByPlaceholderText('John Doe'))
    const inputEmailNode = await waitFor(() =>
      getByPlaceholderText('example@gmail.com')
    )
    const inputPasswordNode = await waitFor(() => getByPlaceholderText('****'))
    fireEvent.change(inputNameNode, { target: { value: 'alfredo tito' } })
    fireEvent.change(inputEmailNode, {
      target: { value: 'emailteste@gmail.com' }
    })
    fireEvent.change(inputPasswordNode, { target: { value: '12345678' } })
    fireEvent.click(buttonNode)
    expect(screen.queryAllByTestId('input-text-error')).toHaveLength(0)
  })
})
