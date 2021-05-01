import { render } from '@testing-library/react'
import { Slider } from './index'

describe('<Slider />', () => {
  it('deve renderizar componente com valores', () => {
    const { getByTestId } = render(<Slider />)

    expect(getByTestId('slick-slider')).toBeInTheDocument()
  })
})
