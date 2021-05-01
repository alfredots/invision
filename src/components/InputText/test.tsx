import { render, fireEvent, waitFor } from '@testing-library/react'
import { InputText } from './index'
import { useState } from 'react'

describe('<InputText />', () => {
  it('Verificar se digitou e houve modificacao do valor', async () => {
    let value = ''
    const setValue = (v) => (value = v)
    const { getByTestId } = render(
      <InputText
        title="user"
        value={value}
        setValue={setValue}
        placeholder="digite seu user"
        error=""
      />
    )
    const inputNode = await waitFor(() => getByTestId('input-text'))
    fireEvent.change(inputNode, { target: { value: 'testing' } })
    expect(value).toEqual('testing')
  })

  it('Deve renderizar componente com valores', () => {
    const { getByTestId } = render(
      <InputText
        title="user"
        value="alfredo"
        setValue={jest.fn()}
        placeholder="digite seu user"
        error=""
      />
    )

    expect(getByTestId('input-text')).toBeInTheDocument()
  })

  it('Deve verificar se title contém valor do atributo title', () => {
    const { getByTestId } = render(
      <InputText
        title="user"
        value="alfredo"
        setValue={jest.fn()}
        placeholder="digite seu user"
        error=""
      />
    )

    expect(getByTestId('input-text-title')).toHaveTextContent('user')
  })

  it('Deve informar que input está errado', () => {
    const { getByTestId } = render(
      <InputText
        title="user"
        value="alfredo"
        setValue={jest.fn()}
        placeholder="digite seu user"
        error="usuário invalido"
      />
    )

    expect(getByTestId('input-text-error')).toBeInTheDocument()
  })
})
